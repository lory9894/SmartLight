from flask import jsonify,Flask, request, render_template, make_response
import pigpio
from requests_html import HTMLSession

light_ip= "192.168.1.10"
session = HTMLSession()
app = Flask(__name__) #create the Flask app

@app.route('/',methods=['GET','POST'])
def light_interface():
    return render_template('light_interface.html')

@app.route('/API',methods=['GET','POST'])
def api():
    r = session.get('http://'+ light_ip +'/API')
    return r.text

@app.route('/POWER',methods=['GET','POST'])
def power():
    r = session.get('http://'+ light_ip +'/CHANGE')
    return r.text

@app.route('/LIGHT_SENSOR',methods=['GET','POST'])
def light_sensor():
    r = session.get('http://'+ light_ip +'/LUM')
    return r.text

@app.route('/PROX',methods=['GET','POST'])
def prox():
    r = session.get('http://'+ light_ip +'/PROX')
    return r.text

if __name__ == '__main__':
    app.run(host= '0.0.0.0',debug=False)

