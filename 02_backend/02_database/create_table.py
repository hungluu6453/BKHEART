import psycopg2

conn = psycopg2.connect(
    host="localhost",
    database="bkchatbot",
    user="server",
    password="123456789",
    port = 5432
)

cursor = conn.cursor()

cursor.execute(open("bkchatbot.sql", "r").read())
# cursor.execute(open("drop_tables.sql", "r").read())

conn.commit()

cursor.close()
conn.close()
