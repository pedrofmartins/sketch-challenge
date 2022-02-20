Feature: Sign In

@automated
Scenario Outline: Sign In successfull - Using <signin>  to Sign In
  Given I am at the Sign In area
  When I type my email, pass and "<signin>" to sign in
  Then I am redirected to the restricted area

  Examples: 
    | signin  |
    | click   |
    | enter   |

@automated
Scenario: Sign Out successfull
  Given I am at the restricted area
  When I click on the Sign Out button
  Then I am redirected to the Sign In area

@automated
Scenario: Sign In without email and pass
  Given I am at the Sign In area
  When I click on the Sign In button
  Then I can see the blank email and password error messages

@automated
Scenario: Sign In without pass
  Given I am at the Sign In area
  When I type only my email
  Then I can see the blank password error message

@automated
Scenario: Sign In without email
  Given I am at the Sign In area
  When I type only my pass
  Then I can see the blank email error message

@automated
Scenario Outline: Wrong Sign In - Email Validation with email <email>
    Given I am at the Sign In area
    When I type "<email>" and pass
    Then I can see the "<type>" error message

  Examples: 
    | email             | type      |
    | c@c.c             | inbox     |
    | testing@testing.c | details   |
    | aaaaa             | invalid   |

@automated
Scenario Outline: Wrong Sign In - Password Validation with password <pass>
  Given I am at the Sign In area
  When I type my email and "<pass>"
  Then I can see the "<type>" error message

  Examples: 
    | pass | type     |
    | 123  | details  |

@automated
Scenario: Sign In - Show my password
  Given I am at the Sign In area
  When I type my credentials
  And I click on the Eye Icon
  Then I can see my password

@automated
Scenario: Sign In - Forgot Password
  Given I am at the Sign In area
  When I click on the Forgot Passord? link
  And I type my email
  Then I can see the sent reset email message