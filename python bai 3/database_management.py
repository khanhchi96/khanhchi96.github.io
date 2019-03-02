
    
import psycopg2
class DatabaseManagement:
    """docstring for DatabaseManagement"""
    def __init__(self):
        try:
            self.connection_string = "dbname='postgres' user='postgres' host='localhost' password='CHIP25081996' port='5432'"
            self.connection = psycopg2.connect(self.connection_string)
            self.cursor = self.connection.cursor()
            print("connection successful")
        except Exception as e:
            print(e)
            self.connection = None
            self.cursor = None
        finally:
            pass
    def query_all(self):
        self.cursor.execute("select * from tasks;")
        categories = self.cursor.fetchall()
        for category in categories:
            print("each pet : {0}".format(category))