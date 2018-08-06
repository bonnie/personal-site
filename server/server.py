# https://stackoverflow.com/questions/44209978/serving-a-create-react-app-with-flask
import os
from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='../client/dist')

# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists("../client/dist/" + path):
        return send_from_directory('../client/dist', path)
    else:
        return send_from_directory('../client', 'index.html')


if __name__ == '__main__':
    app.run(use_reloader=True, port=5000, threaded=True)
