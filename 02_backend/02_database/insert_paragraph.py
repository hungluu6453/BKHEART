import os
import psycopg2

# establish a database connection
conn = psycopg2.connect(
    host="localhost",
    database="bkchatbot",
    user="server",
    password="123456789",
    port = 5432
)

# create a cursor object to execute SQL statements
cursor = conn.cursor()

# loop through the folders
base_directory = "paragraph"
for foldername in os.listdir(base_directory):
    # extract the po_id value from the folder name
    if(foldername == 'Quy che dao tao tien si'):
        po_id = 1
    elif(foldername == 'Quy dinh cau truc CTDT 2021'):
        po_id = 2
    elif(foldername == 'Quy dinh giang day'):
        po_id = 3
    elif(foldername == 'Quy dinh to chuc dao tao trinh do thac si'):
        po_id = 4
    elif(foldername == 'Quy dinh ve dao tao hoc vu'):
        po_id = 5
    # loop through the files in the folder
    folder_directory = os.path.join(base_directory, foldername)
    for filename in sorted(os.listdir(folder_directory)):
        # if filename.endswith(".txt"):
            # read the contents of the file
        with open(os.path.join(folder_directory, filename), "r", encoding="utf-8") as file:
            para_content = file.read()

        # insert the data into the table
        sql = "INSERT INTO paragraph (po_id, para_content) VALUES (%s, %s)"
        values = (po_id, para_content)
        cursor.execute(sql, values)
        
# commit the changes to the database
conn.commit()

# close the cursor and database connection
cursor.close()
conn.close()
