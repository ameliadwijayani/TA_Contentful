import auth0 from "auth0-js"
import { navigate } from "gatsby"

const isBrowser = typeof window !== "undefined"

const auth = isBrowser
  ? new auth0.WebAuth({
      domain: 'build-5b321b6b-256a-4586-8410-5b5eddf45a85.gtsb.io/callback/',
      clientID: 'qwCCBtO6uUDz9l4MAysczszRJUPqgx0W',
      redirectUri: 'amelelectric.us.auth0.com',
      responseType: "token id_token",
      scope: "openid profile email",
    })
  : {}

const tokens = {
  accessToken: false,
  idToken: false,
  expiresAt: false,
}

let user = {}

export const isAuthenticated = () => {
  if (!isBrowser) {
    return
  }

  return localStorage.getItem("isLoggedIn") === "true"
}

export const login = () => {
  if (!isBrowser) {
    return
  }

  auth.authorize()
}

const setSession = (cb = () => {}) => (err, authResult) => {
  if (err) {
    navigate("/")
    cb()
    return
  }

  if (authResult && authResult.accessToken && authResult.idToken) {
    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime()
    tokens.accessToken = authResult.accessToken
    tokens.idToken = authResult.idToken
    tokens.expiresAt = expiresAt
    user = authResult.idTokenPayload
    user["cart"]=[]
    localStorage.setItem("isLoggedIn", true)
    navigate("/")
    cb()
  }
}

export const silentAuth = callback => {
  if (!isAuthenticated()) return callback()
  auth.checkSession({}, setSession(callback))
}

export const handleAuthentication = () => {
  if (!isBrowser) {
    return
  }

  auth.parseHash(setSession())
}

export const getProfile = () => {
  return user
}
export const setItem = (item,qty) => {
  let test=0;
  user["cart"].map((e,index)=>{
    if(e.nama==item.title){
      user["cart"][index].qty=qty;
      test=1;
    }
  })
  if(test==1)return;
  user["cart"].push({
    nama:item.title,
    harga:item.priceRangeV2.maxVariantPrice.amount,
    qty:qty,
    image:item.images
  }) 
  console.log(user["cart"])
}

export const logout = () => {
  localStorage.setItem("isLoggedIn", false)
  auth.logout()
}
