from flask import Flask,url_for,render_template,request
import json
from tinydb import TinyDB
app = Flask(__name__)

db = TinyDB('tiny.db')
cards = db.table('cards')

@app.route('/')
def index():
    return render_template('main.html',page='index')

@app.route('/annotate')
def annotate(id):
    return render_template('main.html',page='annotate')

@app.route('/ajax/cards')
def get_sets():
    if request.method != "POST":
        return json.dumps(cards.all())
    else:
        return cards.insert({'folder': request.form['folder'], 
                            'name': request.form['name'], 
                            'freq': request.form['frequency']})

if __name__ == "__main__":
    app.run()
