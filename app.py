from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
# from flask_login import UserMixin, Login_user, LoginManager, logout_user, login_required , current_user


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///signup.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
# bcrypt = Bcrypt(app)
app.app_context().push()



class Signup(db.Model):
    sno = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    email_Id = db.Column(db.String(300), nullable=False)
    password = db.Column(db.String(30), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self) -> str:
        return f"{self.sno} - {self.name}"
    

@app.route('/')
@app.route('/signin', methods=['GET','POST'])
def main_Page():
    login_status = None
    
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        
        user = Signup.query.filter_by(email_Id=email).first()
        if user and user.password == password:
            login_status = "Login successful"
        else:
            login_status = "Login failed"

    return render_template('index.html', login_status=login_status)



@app.route('/signup', methods=['GET','POST'])
def Sign_Up_Page():
    if request.method == 'POST':
        name = request.form['name']
        email_Id = request.form['email']
        password = request.form['password']

        # Check if the user with the provided email already exists
        existing_user = Signup.query.filter_by(email_Id=email_Id).first()
        if existing_user:
            return "User with this email already exists."

        signup = Signup(name=name, email_Id=email_Id, password=password)
        db.session.add(signup)
        db.session.commit()
        return redirect(url_for('main_Page'))

    return render_template('signup.html')

if __name__ == "__main__":
    app.run(debug=True , port=5000)