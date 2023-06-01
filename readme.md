npx cypress run --reporter junit --reporter-options "mochaFile=reports/TEST-[hash].xml" ; junitparser merge --glob "reports/TEST-*" "reports/junit-report.xml" ; trcli -y -h https://malimarlex.testrail.io --project "secondProject" --username x2junior02@gmail.com --password Testerisanje@alasod7do3  parse_junit --title "Cypress Automated Test Run" -f  "./reports/junit-report.xml" ; remove-item -fo "./reports/TEST-*"

posto sam promenio cypress.config.js:

npx cypress run ; junitparser merge --glob "reports/TEST-*" "reports/junit-report.xml" ; trcli -y -h https://malimarlex.testrail.io --project "secondProject" --username x2junior02@gmail.com --password Testerisanje@alasod7do3  parse_junit --title "Cypress Automated Test Run" -f  "./reports/junit-report.xml" ; remove-item -fo "./reports/TEST-*"
