import psycopg2
class Database:
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
        
