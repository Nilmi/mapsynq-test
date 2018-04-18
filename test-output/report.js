$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login in using username and password",
  "description": "",
  "id": "login-in-using-username-and-password",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Sign in using valid username and password",
  "description": "",
  "id": "login-in-using-username-and-password;sign-in-using-valid-username-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User already navigated to url in mobile browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Directs user to Login page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User enters valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User login successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "login-in-using-username-and-password;sign-in-using-valid-username-and-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "login-in-using-username-and-password;sign-in-using-valid-username-and-password;;1"
    },
    {
      "cells": [
        "wijerathna.nilmi@gmail.com",
        "test321"
      ],
      "line": 14,
      "id": "login-in-using-username-and-password;sign-in-using-valid-username-and-password;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5610691446,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Sign in using valid username and password",
  "description": "",
  "id": "login-in-using-username-and-password;sign-in-using-valid-username-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User already navigated to url in mobile browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Directs user to Login page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User enters valid \"wijerathna.nilmi@gmail.com\" and \"test321\" click on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinitions.user_already_navigated_to_url_in_mobile_browser()"
});
formatter.result({
  "duration": 5250125,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 91111280,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.directs_user_to_Login_page()"
});
formatter.result({
  "duration": 8734130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wijerathna.nilmi@gmail.com",
      "offset": 19
    },
    {
      "val": "test321",
      "offset": 52
    }
  ],
  "location": "LoginStepDefinition.user_enters_valid_and_click_on_login_button(String,String)"
});
formatter.result({
  "duration": 4401951995,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_login_successfully()"
});
formatter.result({
  "duration": 18572302,
  "status": "passed"
});
formatter.after({
  "duration": 109123962,
  "status": "passed"
});
formatter.uri("ViewIncidentLocation.feature");
formatter.feature({
  "line": 1,
  "name": "View incident location",
  "description": "",
  "id": "view-incident-location",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5370471073,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Select an incident and view incident location on map",
  "description": "",
  "id": "view-incident-location;select-an-incident-and-view-incident-location-on-map",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User already navigated to url in mobile browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on traffic road conditions button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Directs user to traffic road conditions page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User select an incident",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Display incident location on map",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinitions.user_already_navigated_to_url_in_mobile_browser()"
});
formatter.result({
  "duration": 4757253,
  "status": "passed"
});
formatter.match({
  "location": "ViewIncidentStepDefinition.user_clicks_on_traffic_road_conditions_button()"
});
formatter.result({
  "duration": 117745600,
  "status": "passed"
});
formatter.match({
  "location": "ViewIncidentStepDefinition.directs_user_to_traffic_road_conditions_page()"
});
formatter.result({
  "duration": 19093461,
  "status": "passed"
});
formatter.match({
  "location": "ViewIncidentStepDefinition.user_select_an_incident()"
});
formatter.result({
  "duration": 153795361,
  "status": "passed"
});
formatter.match({
  "location": "ViewIncidentStepDefinition.display_incident_location_on_map()"
});
formatter.result({
  "duration": 583336963,
  "status": "passed"
});
formatter.after({
  "duration": 106676742,
  "status": "passed"
});
formatter.uri("ViewLiveTrafficCamera.feature");
formatter.feature({
  "line": 1,
  "name": "View live traffic camera image",
  "description": "",
  "id": "view-live-traffic-camera-image",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6803375826,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Select a traffic camera and view live image",
  "description": "",
  "id": "view-live-traffic-camera-image;select-a-traffic-camera-and-view-live-image",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User already navigated to url in mobile browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on traffic camera button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Directs user to traffic cameras page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on a traffic camera",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Systems displays live image",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinitions.user_already_navigated_to_url_in_mobile_browser()"
});
formatter.result({
  "duration": 3637721,
  "status": "passed"
});
formatter.match({
  "location": "LiveTrafficCameraStepDefinition.user_clicks_on_traffic_camera_button()"
});
formatter.result({
  "duration": 166716254,
  "status": "passed"
});
formatter.match({
  "location": "LiveTrafficCameraStepDefinition.directs_user_to_traffic_cameras_page()"
});
formatter.result({
  "duration": 8476370,
  "status": "passed"
});
formatter.match({
  "location": "LiveTrafficCameraStepDefinition.user_clicks_on_a_traffic_camera()"
});
formatter.result({
  "duration": 358326573,
  "status": "passed"
});
formatter.match({
  "location": "LiveTrafficCameraStepDefinition.systems_displays_live_image()"
});
formatter.result({
  "duration": 804907482,
  "status": "passed"
});
formatter.after({
  "duration": 112117172,
  "status": "passed"
});
});