<p id="start" align="center">
<br>
<a href="http://football-predictor.eu"><img height="170rem" src="https://firebasestorage.googleapis.com/v0/b/football-predictor-3416d.appspot.com/o/unnamed.png?alt=media&token=14280d86-9744-4c66-a1fa-150f03e7ef04"></a>
  <h1 align="center" color='7582EB'>Football Predictor</h1>
  http://football-predictor.eu
</p>
Football Predictor is a football matches prediction Webb App. It comes with a lots of statistics, which users can check.Also users can create their own predictions.

## Table of Contents
1. <a href="#overview">Overview</a>
2. <a href="#builtWith">Built with</a>
3. <a href="#appConfig">Application Configuration</a>
 



<h2 id="overview">OverView</h2>
Football Predictor is a web application for football predictions. It has the following functionality:

- Guest Users can: 
  - browse all matches which is playing today.Matches can be filtered by Country or searched by text.
  - view statistic,form and charts for every match.
  - browse all predictions and relevant statistics, made by any registered user.
- Logged Users can:
  - create a predictions.
  - can see,edit and delete predictions which are theirs.
  - like a prediction if it is not theirs

<h2 id="builtWith">Built With</h2>

- React JS as Front End
- Deployed on Netlify.
- Netlify Functions (request to third party API)
- Netlify Environment variables
- Google Real Time Data Base (loggged user made requests)
- Firebase SDK (Authentication)
- React Router v6
- api-football.com (3-rd party REST API)
- Material UI (some containers)
- React Chart JS v2
- node-fetch
- React Hooks (Data Persistance)
- Context API (Keeping User Data)
- Skeleton Loader (Material UI)
- mailjet nodeJs wrapper (sending emails from contact form to me)
- Custom HTML and CSS
- custom valiation and error handling (with Material UI Modal)

<h2 id="appConfig">Application Configurations</h2>
<img width="953" alt="App Diagram" src="https://firebasestorage.googleapis.com/v0/b/football-predictor-3416d.appspot.com/o/FootballPredictorWorkflow.svg?alt=media&token=84ab3c5b-fc6e-41c9-abdb-abda0f347217">
 

### Available Scripts
After cloning this Repository, you can open it with any code editor.

- npm install (the scripts installs all the packages which the application depends on.)
- netlify dev (starts a local development server http://localhost:8888) Netlify CLI (Please use this in order to test the request to football API and the COntact Form)The requests wont triger with npm start script


### Test Accounts
   - email: test@test.com / password: 123456
   - email: user@user.com / password: qwerty


## License

This project is licensed under the [MIT License](LICENSE).


