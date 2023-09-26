import pandas as pd
import numpy as np
import requests

df = pd.read_csv('../kika_q.csv')
df = df.replace({np.nan: None})

for index, row in df[1:].iterrows():
    name, district, parish, village, identificationType, identificationId, dateOfBirth, highestEducationLevel, gender = row['Name'], row['District'], row['Parish'], row['Village'], row['Identification Type?'], row['Please enter National ID No.'], row['Date of Birth?'], row['Education Level'], row['Gender']
    submiited_by = row['Submitted By']
    # print(row['Submitted By'])
    names = name.split(' ')

    create_user = {
        "firstName": names[0],
        "lastName": names[1],
        "district": district,
        "parish": parish,
        "village": village,
        "identificationType": identificationType,
        "identificationId": identificationId or "",
        "dateOfBirth": str(dateOfBirth) or "",
        "highestEducationLevel": highestEducationLevel,
        "gender": gender or "",
        "submittedBy": submiited_by or "",
        "martialStatus": row['Marital Status'],
        "phoneNumber": "+256" + str(row['Enter phone No.']).split('.')[0],
        "registrationDate": str(row['Registration Date?']),
        "hasBankAccount": True if row['Do you have a bank account'] == "Yes" else False
    }

    # print(create_user, "LLL")
    response = requests.post('http://localhost:9001/users', json=create_user)
    if response.status_code >= 400:
        print("failed to create")
        print(response.status_code, response.text)

