Feature: Display live camera details

@FunctionalTest
Scenario: Select a camera from Info panel cameras list

Given User already navigated to url
Then User clicks on Live button
Then User clicks Cameras button on Live panel
Then User clicks on a camera
Then Display camera popup with correct camera name