#!/bin/bash

USER_EMAIL='email@address.com' #Insert your Google Account email address here
USER_PASS='example_password' #Insert your password here

if [[ "$1" = '' ]] || [[ "$2" = '' ]] || [[ "$3" = '' ]]
then
    echo -e "Arguments required\n./fetch.sh <profile id> <start date YYYY-MM-DD> <end date YYYY-MM-DD>"
    exit 1
fi

PROFILE_ID="$1"
START_DATE="$2"
END_DATE="$3"

googleAuth="$(curl https://www.google.com/accounts/ClientLogin -s \
  -d Email=$USER_EMAIL \
  -d Passwd=$USER_PASS \
  -d accountType=GOOGLE \
  -d source=curl-accountFeed-v1 \
  -d service=analytics \
 | grep "Auth=" | cut -d"=" -f2)"

feedUri="https://www.google.com/analytics/feeds/data\
?start-date=$START_DATE\
&end-date=$END_DATE\
&dimensions=ga:source,ga:medium\
&metrics=ga:visits,ga:newVisits,ga:pageviews,ga:bounces,ga:transactions,ga:transactionRevenue\
&sort=-ga:visits\
&max-results=10000\
&ids=ga:$PROFILE_ID\
&prettyprint=true"

curl $feedUri -s --header "Authorization: GoogleLogin $googleAuth"
