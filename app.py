from flask import Flask

app = Flask(__name__)

def load_html(f):
    return open('dist/{}.html'.format(f)).read()

@app.route('/')
def index():
    return load_html('index')


if __name__ == "__main__":
    app.run()
