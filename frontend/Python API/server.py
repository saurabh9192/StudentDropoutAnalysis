import matplotlib
matplotlib.use('Agg')
from flask import Flask, jsonify
from flask_cors import CORS
import matplotlib.pyplot as plt
from io import BytesIO
import base64
from pymongo import MongoClient

app = Flask(__name__)
CORS(app , origins=['http://localhost:3000/analyticaldashboard'])



import urllib.parse

# Original connection string
modified_connection_string = "mongodb+srv://saurabhdeshmukh267:s6rwEBnlWcRcPm8T@cluster0.d8chs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# URL encode the username and password
username = "saurabhdeshmukh267"
password = "s6rwEBnlWcRcPm8T"
encoded_username = urllib.parse.quote_plus(username)
encoded_password = urllib.parse.quote_plus(password)

# Construct the modified connection string

# Use the modified connection string
client = MongoClient(modified_connection_string)

db = client['test']
collection = db['studentusers']

@app.route('/api/generate_plot', methods=['GET'])
def generate_plot():
    # Retrieve data from MongoDB
    cursor = collection.find({}, {'_id': 0, 'year': 1, 'reason': 1, 'gender': 1})
    data = list(cursor)

    # Calculate the number of students in each year
    year_student_count = {}
    for entry in data:
        year = entry['year']
        if year in year_student_count:
            year_student_count[year] += 1
        else:
            year_student_count[year] = 1

    # Sort years in ascending order
    sorted_years = sorted(year_student_count.keys())

    # Extract years and student counts for plotting the bar chart
    years = sorted_years
    male_counts = [0] * len(sorted_years)  # Initialize male counts for each year
    female_counts = [0] * len(sorted_years)  # Initialize female counts for each year

    for entry in data:
        year_index = sorted_years.index(entry['year'])
        gender = entry.get('gender', 'other')
        if gender == 'male':
            male_counts[year_index] += 1
        elif gender == 'female':
            female_counts[year_index] += 1

    # Your matplotlib code to generate the bar chart
    fig, ax = plt.subplots()
    ax.bar(years, male_counts, label='Male', color='#39A7FF')
    ax.bar(years, female_counts, bottom=male_counts, label='Female', color='pink')

    # Add labels to each bar
    for i, (m_count, f_count) in enumerate(zip(male_counts, female_counts)):
        midpoint = [0.5 * (m + f) for m, f in zip(male_counts, female_counts)]
        ax.text(years[i], midpoint[i] + 0.1, f'M={m_count}  F={f_count}', ha='center', va='bottom', fontsize=8, color='red')

    plt.xlabel('Year', color='#104A70')
    plt.ylabel('Number of Students', color='#104A70')
    plt.title('Year-wise Distribution of Students', color='#104A70')
    plt.legend()
    ax.set_facecolor('#DBFCE9')  # Set the background color to light gray

    # Save the bar chart to a BytesIO object
    bar_img_data = BytesIO()
    plt.savefig(bar_img_data, format='png')
    bar_img_data.seek(0)

    plt.close()  # Close the bar chart plot to free up resources

    # Calculate the percentage of each reason for students
    reason_counts = {}
    total_students = len(data)

    for entry in data:
        reason = entry.get('reason', 'Unknown')
        if reason in reason_counts:
            reason_counts[reason] += 1
        else:
            reason_counts[reason] = 1

    # Extract reasons and counts for plotting the pie chart
    reasons = list(reason_counts.keys())
    counts = list(reason_counts.values())

    # Your matplotlib code to generate the pie chart
    plt.figure(facecolor='#DBFCE9')  # Create a new figure for the pie chart
    plt.pie(counts, labels=reasons, autopct='%1.1f%%', startangle=140, textprops={'color': '#104A70'})
    plt.title('Distribution of Students by Reason', color='#104A70')

    # Save the pie chart to a BytesIO object
    pie_img_data = BytesIO()
    plt.savefig(pie_img_data, format='png')
    pie_img_data.seek(0)

    plt.close()  # Close the pie chart plot to free up resources

    # Calculate gender-wise total number of students
    gender_counts = {'male': 0, 'female': 0, 'other': 0}
    for entry in data:
        gender = entry.get('gender', 'other')
        gender_counts[gender] += 1

    # Separate counts for male and female
    male_count = gender_counts['male']
    female_count = gender_counts['female']

    # Convert the BytesIO objects to base64-encoded strings
    base64_bar_img = base64.b64encode(bar_img_data.read()).decode('utf-8')
    base64_pie_img = base64.b64encode(pie_img_data.read()).decode('utf-8')

    return jsonify({
        'bar_chart': base64_bar_img,
        'pie_chart': base64_pie_img,
        'male_count': male_count,
        'female_count': female_count
    })

if __name__ == '__main__':
    app.run(debug=True)
