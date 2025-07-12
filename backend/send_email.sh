#!/bin/bash

name=$1
email=$2

# Simulate email sending (no external service)
echo "=============================="
echo " Simulated Email Sent"
echo "To: $EMAIL"
echo "Subject: Welcome!"
echo -e "Body: Hi $NAME,\nThanks for signing up!"
echo "=============================="

echo "$(date) - Email to $EMAIL" >> simulated_emails.log