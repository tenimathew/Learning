"use strict";(self.webpackChunklearning=self.webpackChunklearning||[]).push([[5662],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(a),h=n,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||r;return a?o.createElement(m,i(i({ref:t},u),{},{components:a})):o.createElement(m,i({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5245:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=a(7462),n=(a(7294),a(3905));const r={id:"Oracle Cloud",sidebar_position:1,description:"Oracle Cloud"},i=void 0,s={unversionedId:"oracle-apex/Oracle Cloud",id:"oracle-apex/Oracle Cloud",title:"Oracle Cloud",description:"Oracle Cloud",source:"@site/docs/oracle-apex/1_Oracle_Cloud.md",sourceDirName:"oracle-apex",slug:"/oracle-apex/Oracle Cloud",permalink:"/learning/docs/oracle-apex/Oracle Cloud",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/oracle-apex/1_Oracle_Cloud.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"Oracle Cloud",sidebar_position:1,description:"Oracle Cloud"},sidebar:"tutorialSidebar",previous:{title:"Oracle Apex",permalink:"/learning/docs/category/oracle-apex"},next:{title:"GCP",permalink:"/learning/docs/category/gcp"}},c={},l=[{value:"Architecture",id:"architecture",level:2},{value:"Regions",id:"regions",level:3},{value:"Availability Domains",id:"availability-domains",level:3},{value:"Fault Domains",id:"fault-domains",level:3},{value:"Realms",id:"realms",level:3},{value:"Identity and Access Management (IAM) - Components",id:"identity-and-access-management-iam---components",level:2},{value:"Resource",id:"resource",level:3},{value:"User",id:"user",level:3},{value:"Group",id:"group",level:3},{value:"Dynamic Group",id:"dynamic-group",level:3},{value:"Network Source",id:"network-source",level:3},{value:"Compartment",id:"compartment",level:3},{value:"Tenancy",id:"tenancy",level:3},{value:"Policy",id:"policy",level:3},{value:"Identity Domain",id:"identity-domain",level:3},{value:"Home Region",id:"home-region",level:3},{value:"Federation",id:"federation",level:3},{value:"OCID",id:"ocid",level:3},{value:"Security Zone",id:"security-zone",level:3},{value:"Core Services",id:"core-services",level:2},{value:"VCN",id:"vcn",level:3},{value:"Instance",id:"instance",level:3},{value:"Image",id:"image",level:3},{value:"Shape",id:"shape",level:3},{value:"Block Volume",id:"block-volume",level:3}],u={toc:l};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"architecture"},"Architecture"),(0,n.kt)("h3",{id:"regions"},"Regions"),(0,n.kt)("p",null,"Oracle Cloud Infrastructure is physically hosted in regions and availability domains. A region is a localized geographic area, and an availability domain is one or more data centers located within a region. Oracle cloud regions are globally distributed data centers that provide secure, high-performance, local environments. These regions allow businesses to move, build, and run all workloads in the cloud from infrastructure to applications, while meeting regional data regulations."),(0,n.kt)("h3",{id:"availability-domains"},"Availability Domains"),(0,n.kt)("p",null,"Availability domains are isolated from each other, fault tolerant, and very unlikely to fail simultaneously or be impacted by the failure of another availability domain. When you configure your cloud services, use multiple availability domains to ensure high availability and to protect against resource failure. Be aware that some resources must be created within the same availability domain, such as an instance and the storage volume attached to it."),(0,n.kt)("h3",{id:"fault-domains"},"Fault Domains"),(0,n.kt)("p",null,"A fault domain is a grouping of hardware and infrastructure within an availability domain. Each availability domain contains three fault domains. Fault domains provide anti-affinity: they let you distribute your instances so that the instances are not on the same physical hardware within a single availability domain. A hardware failure or Compute hardware maintenance event that affects one fault domain does not affect instances in other fault domains."),(0,n.kt)("h3",{id:"realms"},"Realms"),(0,n.kt)("p",null,"A realm is a logical collection of regions. Realms are isolated from each other and do not share any data. Your tenancy exists in a single realm and has access to the regions that belong to that realm."),(0,n.kt)("h2",{id:"identity-and-access-management-iam---components"},"Identity and Access Management (IAM) - Components"),(0,n.kt)("h3",{id:"resource"},"Resource"),(0,n.kt)("p",null,"The cloud objects that your company's employees create and use when interacting with Oracle cloud infrastructure. For example,compute instances, block storage volumes, virtual cloud networks (VCN), subnets, route tables etc."),(0,n.kt)("h3",{id:"user"},"User"),(0,n.kt)("p",null,"An individual employee or system that needs to manage or use your companies Oracle cloud infrastructure resources. Users might need to launch instances, manage remote disks, work with your virtual cloud network, etc.End uses of your application are not typically IAM users. Users have one or more IAM credentials (Ex: Console password, API signing key, SMTP Credentials, IAM Database password)."),(0,n.kt)("h3",{id:"group"},"Group"),(0,n.kt)("p",null,"A collection of users who all need the same type of access to a particular set of resources or compartment."),(0,n.kt)("h3",{id:"dynamic-group"},"Dynamic Group"),(0,n.kt)("p",null,'A special type of group that contains resources (such as compute instances) that match rules that you define (thus the membership can change dynamically as matching resources are created or deleted). These instances act as "principal" actors and can make API calls to services according to policies that you write for the dynamic group.'),(0,n.kt)("h3",{id:"network-source"},"Network Source"),(0,n.kt)("p",null,"A group of IP addresses that are allowed to access resources in your tenancy. The IP addresses can be public IP addresses or IP addresses from a VCN within your tenancy. After you create the network source, you use policy to restrict access to only requests that originate from the IPs in the network source."),(0,n.kt)("h3",{id:"compartment"},"Compartment"),(0,n.kt)("p",null,"A compartment is a collection of related resources (such as cloud networks, compute instances, or block volumes). Compartments are a fundamental component of Oracle Cloud Infrastructure for organizing and isolating your cloud resources. You use them to clearly separate resources for the purposes of measuring usage, billing, access and isolation. A common approach is to create a compartment for each major part of your organization. A compartment should be thought of as a logical group and not a physical container. When you begin working with resources in the Console, the compartment acts as a filter for what you are viewing."),(0,n.kt)("p",null,"When you sign up for Oracle Cloud Infrastructure, Oracle creates your tenancy, which is the root compartment that holds all your cloud resources. You then create additional compartments within the tenancy (root compartment) and corresponding policies to control access to the resources in each compartment. When you create a cloud resource such as an instance, block volume, or cloud network, you must specify to which compartment you want the resource to belong.\nUltimately, the goal is to ensure that each person has access to only the resources they need."),(0,n.kt)("p",null,"If your organization is small, or if you are still in the proof-of-concept stage of evaluating Oracle Cloud Infrastructure, you might consider placing all of your resources in the root compartment (tenancy). This approach makes it easy for you to quickly view and manage all your resources. You can still write policies and create groups to restrict permissions on specific resources to only the users who need access."),(0,n.kt)("p",null,"(Best practice) Create a sandbox compartment. Even though your plan is to maintain your resources in the root compartment, Oracle recommends setting up a sandbox compartment so that you can give users a dedicated space to try out features. In the sandbox compartment you can grant users permissions to create and manage resources, while maintaining stricter permissions on the resources in your tenancy (root) compartment."),(0,n.kt)("h3",{id:"tenancy"},"Tenancy"),(0,n.kt)("p",null,"When you sign up or subscribe to Oracle Cloud services, Oracle creates a tenancy for you. You can think of the tenancy as your account, but it is also a secure and isolated partition within Oracle Cloud Infrastructure where you can create, organize, and administer your cloud resources. When you sign up, your tenancy is created in your home region, but you can subscribe your tenancy to as many regions as you need. Large organizations can have multiple tenancies."),(0,n.kt)("p",null,"The root compartment that contains all of your organization's Oracle Cloud Infrastructure resources. Oracle automatically creates your company's tenancy for you. Directly within the tenancy are your IAM entities (users, groups, compartments, and some policies; you can also put policies into compartments inside the tenancy). You place the other types of cloud resources (e.g., instances, virtual networks, block storage volumes, etc.) inside the compartments that you create."),(0,n.kt)("h3",{id:"policy"},"Policy"),(0,n.kt)("p",null,"A document that specifies who can access which resources, and how. Access is granted at the group and compartment level, which means you can write a policy that gives a group a specific type of access within a specific compartment, or to the tenancy itself. If you give a group access to the tenancy, the group automatically gets the same type of access to all the compartments inside the tenancy."),(0,n.kt)("h3",{id:"identity-domain"},"Identity Domain"),(0,n.kt)("p",null,"An identity domain is a container for managing users and roles, federating and provisioning of users, secure application integration through Oracle Single Sign-On (SSO) configuration, and OAuth administration."),(0,n.kt)("h3",{id:"home-region"},"Home Region"),(0,n.kt)("p",null,"The region where your IAM resources reside. All IAM resources are global and available across all regions, but the master set of definitions reside in a single region, the home region. You must make changes to your IAM resources in your home region. The changes will be automatically propagated to all regions."),(0,n.kt)("h3",{id:"federation"},"Federation"),(0,n.kt)("p",null,"A relationship that an administrator configures between an identity provider and a service provider. When you federate Oracle Cloud Infrastructure with an identity provider, you manage users and groups in the identity provider. You manage authorization in Oracle Cloud Infrastructure's IAM service. Oracle Cloud Infrastructure tenancies are federated with Oracle Identity Cloud Service by default."),(0,n.kt)("h3",{id:"ocid"},"OCID"),(0,n.kt)("p",null,"Every Oracle Cloud Infrastructure resource has an Oracle-assigned unique ID called an Oracle Cloud Identifier (OCID). This ID is included as part of the resource's information in both the Console and API."),(0,n.kt)("h3",{id:"security-zone"},"Security Zone"),(0,n.kt)("p",null,"Security Zones let you be confident that your Compute, Networking, Object Storage, Database, and other resources comply with Oracle security principles and best practices. A security zone is associated with one or more compartments\xa0 and a security zone recipe. When you create and update resources in a security zone, Oracle Cloud Infrastructure validates these operations against security zone policies in the zone's recipe. If any security zone policy is violated, then the operation is denied."),(0,n.kt)("h2",{id:"core-services"},"Core Services"),(0,n.kt)("h3",{id:"vcn"},"VCN"),(0,n.kt)("p",null,"A virtual cloud network is a virtual version of a traditional network\u2014including subnets, route tables, and gateways\u2014on which your instances run. A cloud network resides within a single region but includes all the region's availability domains. Each subnet you define in the cloud network can either be in a single availability domain or span all the availability domains in the region (recommended). You need to set up at least one cloud network before you can launch instances. You can configure the cloud network with an optional internet gateway to handle public traffic, and an optional IPSec connection or FastConnect to securely extend your on-premises network."),(0,n.kt)("h3",{id:"instance"},"Instance"),(0,n.kt)("p",null,"An instance is a compute host running in the cloud. An Oracle Cloud Infrastructure compute instance allows you to utilize hosted physical hardware, as opposed to the traditional software-based virtual machines, ensuring a high level of security and performance."),(0,n.kt)("h3",{id:"image"},"Image"),(0,n.kt)("p",null,"The image is a template of a virtual hard drive that defines the operating system and other software for an instance, for example, Oracle Linux. When you launch an instance, you can define its characteristics by choosing its image. Oracle provides a set of platform images you can use. You can also save an image from an instance that you have already configured to use as a template to launch more instances with the same software and customizations."),(0,n.kt)("h3",{id:"shape"},"Shape"),(0,n.kt)("p",null,"In Compute, the shape specifies the number of CPUs and amount of memory allocated to the instance. Oracle Cloud Infrastructure offers shapes to fit various computing requirements."),(0,n.kt)("h3",{id:"block-volume"},"Block Volume"),(0,n.kt)("p",null,"A block volume is a virtual disk that provides persistent block storage space for Oracle Cloud Infrastructure instances. Use a block volume just as you would a physical hard drive on your computer, for example, to store data and applications. You can detach a volume from one instance and attach it to another instance without loss of data."))}d.isMDXComponent=!0}}]);