*******************FRONTEND**************

chrome Extensions:colorzilla and imageAssistance image batch downloader

>>>>>>>>>>>>>>>>>Header>>>>>>>>>>>>>>>>>
https://pngimg.com/image/61232 : link to download amazon logo

https://react-icons.github.io/react-icons/ : link to react icons after installing to package.json

>>>>>>>>>>>>>>>>API for carasoul,products>>>>>>>>>>>>>

https://fakestoreapi.com : api to fetch images of each category

https://fakestoreapi.com/products : is like the base URL

https://mui.com/material-ui/react-rating/ : for Rating

http://numeraljs.com/ : formating our price

https://react-icons.github.io/react-icons/search/#q=    : react spinner official site.click yarn add spinners to get npm cpmmand for install


>>>>>>>>>>>>>>>>>>>>github>>>>>>>>>>>>>>>
git init
git remote add origin https://github.com/meti21/Amazon_Clone.git
git add .
git commit -m ""
git push origin main
git pull --rebase origin main

******************BackEND***************
Firebase setup used in the videos mixes two different versions of the Firebase SDK: the modular SDK (v9+) and the namespaced/compat SDK (v8-style). This is technically valid with the compat layer, but it's not the most modern or recommended setup for new projects.so i changed it to modular SDK (v9+)

# firebase -> go to console -> choose your project -> build -> functions

https://firebase.google.com Enabling firbase Authentication 
#    -> Authentication -> get started -> sign in method -> email and password -> enable email and password -> save


payment Front END
    https://stripe.com Stride for payment
#   start now -> sign up -> if it said sandbox at the left top cornor then its in test mode -> on the main home you can find public and secret key on right hand side under recommendation-> you can also see docs for more info


https://firebase.google.com/docs/cli :Firebase command line interface(CLI) mine is V 14.4.0

        -If you see an EACCES error when you try to install a package globally, you can Use sudo to run as admin (Quickest Fix)
        -sudo npm install -g firebase-tools then enter your mac password
        -to check if firebase is globally install npm list -g.if its not in the list

#                -windows -> start menu -> write env -> choose edit envt variables -> click envt variables -> double click on the path -> make sure the path in your terminal(while you run the npm list -g command) is in the list(if its there there you're good togo to use firebase on the CLI but if not add it)

#                -MacOs -> If your global prefix path (e.g. /usr/local/bin or ~/.npm-global/bin) is in the PATH, then you're good!

Firebase initialization steps : during these steps you will see functions folder

# firebase login -> firebase init -> firbase init -> choose Functions -> press space -> press enter -> create a project or choose your existing one -> press enter -> if you choose existing project it will show you your projects -> press enter and wait -> select javascript -> select No for ESLint N (n and enter) -> yes for install dependencies

To run: npm run serve

sample of query on Thunder post request(this is given by the firebase on the terminal): http://127.0.0.1:5001/clone-e752e/us-central1/api
sample of query on Thunder post request: http://127.0.0.1:5001/clone-e752e/us-central1/api/payment/create?total=200


stripe for react.js documentation : https://docs.stripe.com/sdks/stripejs-react?locale=fr-FR


>>>>>>>>>>>>>>>>>>Deployment

change your firebase plan to Blaze(if not you will face an error) --> open your function in terminal --> firebase login command --> npm run deploy -->  on your fire base select functions --> wait --> in firebase-debug folder under functions the minInstanceCount:null so we have to fix it by adding setGlobalOptions({maxInstances:10}) inside index.js right under express(modular v9 might not throw an error for this) --> after the deploy completed open the function URL link and you have to see the success message you wrote for get request --> copy THE function URL link and make it the baseURL in axios.js(frontend)