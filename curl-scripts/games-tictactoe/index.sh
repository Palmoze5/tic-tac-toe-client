curl "https://tic-tac-toe-wdi.herokuapp.com/game" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo
