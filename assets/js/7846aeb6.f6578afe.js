"use strict";(self.webpackChunklearning=self.webpackChunklearning||[]).push([[9836],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7105:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={id:"Section 27. Database Administration",sidebar_position:27,description:"Basics"},o=void 0,s={unversionedId:"oracle/Section 27. Database Administration",id:"oracle/Section 27. Database Administration",title:"Section 27. Database Administration",description:"Basics",source:"@site/docs/oracle/27_dba-basics.md",sourceDirName:"oracle",slug:"/oracle/Section 27. Database Administration",permalink:"/learning/docs/oracle/Section 27. Database Administration",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/oracle/27_dba-basics.md",tags:[],version:"current",sidebarPosition:27,frontMatter:{id:"Section 27. Database Administration",sidebar_position:27,description:"Basics"},sidebar:"tutorialSidebar",previous:{title:"Section 26. Cursors",permalink:"/learning/docs/oracle/Section 26. Cursors"},next:{title:"Section 28. Oracle Architecture",permalink:"/learning/docs/oracle/Section 28. Oracle Architecture"}},l={},c=[{value:"System Change Number (SCN)",id:"system-change-number-scn",level:2},{value:"Background Processes",id:"background-processes",level:2},{value:"Oracle Versions Milestones",id:"oracle-versions-milestones",level:2},{value:"Version 6",id:"version-6",level:3},{value:"Version 7",id:"version-7",level:3},{value:"Version 8",id:"version-8",level:3},{value:"Version 8i",id:"version-8i",level:3},{value:"Version 9i",id:"version-9i",level:3},{value:"Version10g",id:"version10g",level:3},{value:"Version 12c",id:"version-12c",level:3},{value:"Modes of Database Shutdown",id:"modes-of-database-shutdown",level:2}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"system-change-number-scn"},"System Change Number (SCN)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SCN (System Change Number) is a primary mechanism to maintain data consistency in Oracle database."),(0,r.kt)("li",{parentName:"ul"},"Every time a user commits a transaction, Oracle records a new SCN."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"SCN_TO_TIMESTAMP")," function can be used to map between the SCN to a point in time."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ORA_ROWSCN")," pseudo column is useful for determining approximately when a row was last updated.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SQL> SELECT CURRENT_SCN FROM V$database;\nSQL> SELECT SCN_TO_TIMESTAMP(ORA_ROWSCN) FROM employees;\nSQL> SELECT ORA_ROWSCN, last_name FROM employees WHERE employee_id = 188;\n")),(0,r.kt)("h2",{id:"background-processes"},"Background Processes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SMON"),": System Monitor recovers after instance failure and monitors temporary segments and extents."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PMON"),": Process Monitor recovers failed process resources."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DBWR"),":Database Writer or Dirty Buffer Writer process is responsible for writing dirty buffers from the database buffer cache to the database data files. Generally, DBWR only writes blocks back to the data files on commit, or when the cache is full and space has to be made for more blocks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"LGWR"),": Log Writer process is responsible for writing the log buffers out to the redo logs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ARCn"),": The optional Archive process writes filled redo logs to the archive log location(s).")),(0,r.kt)("h2",{id:"oracle-versions-milestones"},"Oracle Versions Milestones"),(0,r.kt)("h3",{id:"version-6"},"Version 6"),(0,r.kt)("p",null,"PL/SQL language introduced"),(0,r.kt)("h3",{id:"version-7"},"Version 7"),(0,r.kt)("p",null,"PL/SQL stored program units introduced"),(0,r.kt)("h3",{id:"version-8"},"Version 8"),(0,r.kt)("p",null,"Support for table partitioning"),(0,r.kt)("h3",{id:"version-8i"},"Version 8i"),(0,r.kt)("p",null,"'i' stands for internet computing. Provided native support for internet protocols and server-side support for Java enabling the database to be deployed in a multitier environment."),(0,r.kt)("h3",{id:"version-9i"},"Version 9i"),(0,r.kt)("p",null,"Introduced Oracle RAC enabling multiple instances to access a single database simultaneously.\nThe benefits of Real Application Clusters are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ability to spread CPU load across multiple servers"),(0,r.kt)("li",{parentName:"ul"},"Continuous Availability / High Availability (HA)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Protection from single instance failures"),(0,r.kt)("li",{parentName:"ul"},"Protection from single server failures"))),(0,r.kt)("li",{parentName:"ul"},"Scalability")),(0,r.kt)("h3",{id:"version10g"},"Version10g"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"g' stands for grid computing (A computing architecture that coordinates large numbers of servers and storage to act as a single large computer)."),(0,r.kt)("li",{parentName:"ul"},"This release enabled organizations to virtualize computing resources by building a grid infrastructure based on low-cost commodity servers. A key goal was to make the database self-managing and self-tuning."),(0,r.kt)("li",{parentName:"ul"},"Oracle Automatic Storage Management (Oracle ASM) helped achieve this goal by virtualizing and simplifying database storage management.")),(0,r.kt)("h3",{id:"version-12c"},"Version 12c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"'c' stands for cloud computing."),(0,r.kt)("li",{parentName:"ul"},"Introduced Multitenant architecture. The multitenant architecture enables an Oracle database to function as a multitenant container database (CDB). A CDB includes zero, one, or many pluggable databases (PDBs)."),(0,r.kt)("li",{parentName:"ul"},"A PDB is a portable collection of schemas, schema objects, and non-schema objects. You can unplug a PDB from a CDB and plug it into a different CDB."),(0,r.kt)("li",{parentName:"ul"},"All Oracle databases before Oracle Database 12c were non-CDBs.")),(0,r.kt)("h2",{id:"modes-of-database-shutdown"},"Modes of Database Shutdown"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SHUTDOWN IMMEDIATE"),": Terminates any executing SQL, uncommitted changes are rolled back and disconnects the users; performs a check point then close the online datafiles"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SHUTDOWN TRANSACTIONAL"),":Prevents users from starting new transactions but wait till all current transactions to complete before shutting down; performs a check point then close the online datafiles"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SHUTDOWN NORMAL"),": Waits for all connected users to disconnect before shutting down; performs a check point then close the online datafiles"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SHUTDOWN ABORT"),": Closes the datafiles without checkpoint, Instance recovery is required in the next startup.")))}d.isMDXComponent=!0}}]);