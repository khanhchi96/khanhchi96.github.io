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
    
    def update_product(self, productName, year, productid):
        try:
            params = []
            if(productName != ''):
                params.append('productName=%s')
            if(int(year) > 1900):
                params.append('year=%s')
            paramString = ','.join(params)
            sql = """UPDATE Products SET """+ paramString +""" where productid = %s"""
            self.cursor.execute(sql, (productName, year, productid))
            self.connection.commit()
            return ('ok', "Update data in Products successfully")
        except Exception as ex:
            return ('failed', "Update data in Products failed. Error: {}".format(ex))

    def delete_product(self, productid = 0):
        try: 
            sql = """DELETE FROM Products WHERE productid = %s"""
            self.cursor.execute(sql, (productid))
            self.connection.commit()
            return ('ok', "Delete product successfully")
        except Exception as ex:
            return ('failed', "Delete product failed. Error: {}".format(ex))
        
        
            
