import psycopg2
class Database:
    databaseObject = None
    @staticmethod
    def get_instance():
        if(Database.databaseObject is None):
            Database.databaseObject = Database()
        return Database.databaseObject
    def __init__(self):
        try:
            self.connection_string="dbname = 'chi' user = 'postgres' host='localhost' password='CHIP25081996'"
            self.connection = psycopg2.connect(self.connection_string)
            self.cursor = self.connection.cursor()
            print('connect DB successfully')
        except Exception as ex:
            self.connection = None
            self.cursor = None
            print('connect DB failed. Error: {}'.format(ex))
        finally:
            pass
    def insert_new_product(self, productName, year):
        try:
            sql = """INSERT INTO Products(productName, year) VALUES(%s, %s)"""
            self.cursor.execute(sql, (productName, year))
            self.connection.commit()
            return ('ok', "Insert data to product successfully")
        except Exception as ex:
            return ('failed', "Insert data to product failed. Error: {}".format(ex))
            
        
            
