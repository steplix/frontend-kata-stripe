# Assign the parameters to variables
ROBOTS="$1"

# Debugging: Print the assigned values
echo "ROBOTS=$ROBOTS"

# .env: Creating the .env file with variables
echo ROBOTS=$ROBOTS >> .env

# Update the .env file with the new values
sed -i "s#^ROBOTS=.*#ROBOTS=$ROBOTS#" .env



