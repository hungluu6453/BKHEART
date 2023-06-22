import psycopg2

conn = psycopg2.connect(
    host="localhost",
    database="bkchatbot",
    user="server",
    password="123456789",
    port = 5432
)

cursor = conn.cursor()

# sql = "INSERT INTO voice (voice_filename) VALUES (%s)"
# values = ('test.wav',)
# cursor.execute(sql, values)

sql = "SELECT * FROM utterance"
cursor.execute(sql)
return_value = cursor.fetchall()
print(return_value)

conn.commit()

cursor.close()
conn.close()