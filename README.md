# Namaste React 

package.json is configuration for npm.

diff bw ^ ~

^ update minor version
~ update direct major version 

package-lock.json keeps track of exact version of dependency but
package.json keeeps track of approx version of depedency

transitive dependency- dependency of dependency is called transitive dependency.

npx command execute package

HMR-Hot module replacement- as soon as save file it reflects in browser


# parcel
 - Dev build
 - Local server
 - HMR
 - File watching algorithm - written in c++
 - Caching - Faster builds
 - Image optimization
 - Minification
 - Bundling
 - Compress
 - consistent hashing
 - code splitting
 - differential bundling - support older browser
 - Diagnostic
 - Error Handling
 - HTTPs
 - Tree shaking - remove unused code 
 - different deb and prod bundles

 - npm run start == npm start

 # component composition
 - wrap one component into another component

 Note- we can't write 2 default export in one file
 - whenever we need to import multiple things use named export or names import

 # state
 - when state variable update , re-render the react component again


# diff algorithm
- difference between old virtual dom and new virtual dom

# reconciliation algorithm ( React fiber)

Note- React is fast because efficient dom manipulation

# type vs interface

when building application use type and building library use interface

# benefits of typescript 

auto complete , solve compile time error instead of runtime error

 # use state hook rule

 always declare state variable inside component
 declare on top only
 never declare in condition or loop

 client side routing (SPA) - no network request send