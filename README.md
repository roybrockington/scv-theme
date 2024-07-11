# SCV Theme
Custom Twig theme designed for Drupal 9+ powered by Bootstrap

## Install using drush
First install the Bootstrap theme module:
```
composer require 'drupal/bootstrap5:^4.0'
```
Then clone scv-theme to **{ your_d10_project }/themes/custom/scv**

Activate both themes using drush + UI:
```
drush en -y bootstrap5 scv && drush theme:en scv
```

## Additional module styling
Custom boostrap styling is also included for the EU Cookie Compliance module - details on installation can be found [here](https://www.drupal.org/project/eu_cookie_compliance).

