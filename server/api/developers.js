const express = require("express");
const router = express.Router();
const axios = require("axios");

const developers = {
  "vignan83":{
    login: 'vignan83',
    avatar_url: 'https://avatars.githubusercontent.com/u/35171316?v=4',
    myName: 'Vignan',
    company: null,
    blog: 'https://www.linkedin.com/in/saivignanreddy/',
    location: 'Hyderabad, India',
    email: null,
    bio: 'Software Developer',
    github_id: 'vignan83',
    linkedin_id: 'vignan83',
    codechef_id: 'vignan83',
    hackerrank_id: 'vignan83',
    twitter_id: 'vignan83',
    medium_id: 'vignan83',
    repos: [ 
    
        {
          name: 'zstd',
          html_url: 'https://github.com/facebook/zstd',
          description: 'Zstandard - Fast real-time compression algorithm',
          updated_at: '2021-09-09T07:12:31Z'
        },
        {
          name: 'react',
          html_url: 'https://github.com/facebook/react',
          description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
          updated_at: '2021-09-09T07:12:16Z'
        },
        {
          name: 'CacheLib',
          html_url: 'https://github.com/facebook/CacheLib',
          description: 'Pluggable in-process caching engine to build and scale high performance services',
          updated_at: '2021-09-09T07:10:56Z'
        },
        {
          name: 'docusaurus',
          html_url: 'https://github.com/facebook/docusaurus',
          description: 'Easy to maintain open source documentation websites.',
          updated_at: '2021-09-09T07:07:30Z'
        },
        {
          name: 'infer',
          html_url: 'https://github.com/facebook/infer',
          description: 'A static analyzer for Java, C, C++, and Objective-C',
          updated_at: '2021-09-09T07:06:52Z'
        },
        {
          name: 'ThreatExchange',
          html_url: 'https://github.com/facebook/ThreatExchange',
          description: 'Share threat information with vetted partners',
          updated_at: '2021-09-09T07:06:39Z'
        },
        {
          name: 'create-react-app',
          html_url: 'https://github.com/facebook/create-react-app',
          description: 'Set up a modern web app by running one command.',
          updated_at: '2021-09-09T07:06:18Z'
        },
        {
          name: 'react-native',
          html_url: 'https://github.com/facebook/react-native',
          description: 'A framework for building native applications using React',
          updated_at: '2021-09-09T06:57:25Z'
        },
        {
          name: 'fboss',
          html_url: 'https://github.com/facebook/fboss',
          description: 'Facebook Open Switching System\n' +
            '\n' +
            'Software for controlling network switches.',
          updated_at: '2021-09-09T06:57:16Z'
        },
        {
          name: 'fb303',
          html_url: 'https://github.com/facebook/fb303',
          description: 'fb303 is a core set of thrift functions that provide a common mechanism for querying stats and other information from a service.',
          updated_at: '2021-09-09T06:50:45Z'
        },
        {
          name: 'watchman',
          html_url: 'https://github.com/facebook/watchman',
          description: 'Watches files and records, or triggers actions, when they change. ',
          updated_at: '2021-09-09T06:50:28Z'
        },
        {
          name: 'fbzmq',
          html_url: 'https://github.com/facebook/fbzmq',
          description: 'Facebook ZeroMQ wrappers.',
          updated_at: '2021-09-09T06:50:09Z'
        },
        {
          name: 'bistro',
          html_url: 'https://github.com/facebook/bistro',
          description: 'Bistro is a flexible distributed scheduler, a high-performance framework supporting multiple paradigms while retaining ease of configuration, management, and monitoring.',
          updated_at: '2021-09-09T06:50:08Z'
        },
        {
          name: 'openr',
          html_url: 'https://github.com/facebook/openr',
          description: 'Distributed platform for building autonomic network functions.',
          updated_at: '2021-09-09T06:50:08Z'
        },
        {
          name: 'draft-js',
          html_url: 'https://github.com/facebook/draft-js',
          description: 'A React framework for building text editors.',
          updated_at: '2021-09-09T06:44:07Z'
        },
        {
          name: 'flux',
          html_url: 'https://github.com/facebook/flux',
          description: 'Application Architecture for Building User Interfaces',
          updated_at: '2021-09-09T06:43:22Z'
        },
        {
          name: 'mcrouter',
          html_url: 'https://github.com/facebook/mcrouter',
          description: 'Mcrouter is a memcached protocol router for scaling memcached deployments.',
          updated_at: '2021-09-09T06:32:09Z'
        },
        {
          name: 'buck',
          html_url: 'https://github.com/facebook/buck',
          description: 'A fast build system that encourages the creation of small, reusable modules over a variety of platforms and languages.',
          updated_at: '2021-09-09T06:29:12Z'
        },
        {
          name: 'flow',
          html_url: 'https://github.com/facebook/flow',
          description: 'Adds static typing to JavaScript to improve developer productivity and code quality.',
          updated_at: '2021-09-09T06:27:09Z'
        },
        {
          name: 'fbthrift',
          html_url: 'https://github.com/facebook/fbthrift',
          description: "Facebook's branch of Apache Thrift, including a new C++ server.",
          updated_at: '2021-09-09T06:25:01Z'
        },
        {
          name: 'pyre-check',
          html_url: 'https://github.com/facebook/pyre-check',
          description: 'Performant type-checking for python.',
          updated_at: '2021-09-09T06:22:48Z'
        },
        {
          name: 'jest',
          html_url: 'https://github.com/facebook/jest',
          description: 'Delightful JavaScript Testing.',
          updated_at: '2021-09-09T06:14:50Z'
        },
        {
          name: 'openbmc',
          html_url: 'https://github.com/facebook/openbmc',
          description: 'OpenBMC is an open software framework to build a complete Linux image for a Board Management Controller (BMC).',
          updated_at: '2021-09-09T06:07:25Z'
        },
        {
          name: 'hhvm',
          html_url: 'https://github.com/facebook/hhvm',
          description: 'A virtual machine for executing programs written in Hack.',
          updated_at: '2021-09-09T05:55:29Z'
        },
        {
          name: 'folly',
          html_url: 'https://github.com/facebook/folly',
          description: 'An open-source C++ library developed and used at Facebook.',
          updated_at: '2021-09-09T05:52:14Z'
        },
        {
          name: 'proxygen',
          html_url: 'https://github.com/facebook/proxygen',
          description: 'A collection of C++ HTTP libraries including an easy to use HTTP server.',
          updated_at: '2021-09-09T05:38:46Z'
        },
        {
          name: 'fresco',
          html_url: 'https://github.com/facebook/fresco',
          description: 'An Android library for managing images and the memory they use.',
          updated_at: '2021-09-09T05:25:31Z'
        },
        {
          name: 'wangle',
          html_url: 'https://github.com/facebook/wangle',
          description: 'Wangle is a framework providing a set of common client/server abstractions for building services in a consistent, modular, and composable way.',
          updated_at: '2021-09-09T05:14:07Z'
        },
        {
          name: 'prop-types',
          html_url: 'https://github.com/facebook/prop-types',
          description: 'Runtime type checking for React props and similar objects',
          updated_at: '2021-09-09T04:44:05Z'
        },
        {
          name: 'Ax',
          html_url: 'https://github.com/facebook/Ax',
          description: 'Adaptive Experimentation Platform',
          updated_at: '2021-09-09T04:44:02Z'
        }
      
    ]
  },
  "facebook":{
    login: 'facebook',
    avatar_url: 'https://avatars.githubusercontent.com/u/69631?v=4',
    myName: 'Facebook',
    company: null,
    blog: 'https://opensource.fb.com',
    location: 'Menlo Park, California',
    email: null,
    bio: 'We are working to build community through open source technology. NB: members must have two-factor auth.',
    github_id: 'facebook',
    linkedin_id: '',
    codechef_id: '',
    hackerrank_id: '',
    twitter_id: 'Facebook',
    medium_id: 'FBResearch',
    repos: [
      {
        name: 'zstd',
        html_url: 'https://github.com/facebook/zstd',
        description: 'Zstandard - Fast real-time compression algorithm',
        updated_at: '2021-09-09T07:12:31Z'
      },
      {
        name: 'react',
        html_url: 'https://github.com/facebook/react',
        description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
        updated_at: '2021-09-09T07:12:16Z'
      },
      {
        name: 'CacheLib',
        html_url: 'https://github.com/facebook/CacheLib',
        description: 'Pluggable in-process caching engine to build and scale high performance services',
        updated_at: '2021-09-09T07:10:56Z'
      },
      {
        name: 'docusaurus',
        html_url: 'https://github.com/facebook/docusaurus',
        description: 'Easy to maintain open source documentation websites.',
        updated_at: '2021-09-09T07:07:30Z'
      },
      {
        name: 'infer',
        html_url: 'https://github.com/facebook/infer',
        description: 'A static analyzer for Java, C, C++, and Objective-C',
        updated_at: '2021-09-09T07:06:52Z'
      },
      {
        name: 'ThreatExchange',
        html_url: 'https://github.com/facebook/ThreatExchange',
        description: 'Share threat information with vetted partners',
        updated_at: '2021-09-09T07:06:39Z'
      },
      {
        name: 'create-react-app',
        html_url: 'https://github.com/facebook/create-react-app',
        description: 'Set up a modern web app by running one command.',
        updated_at: '2021-09-09T07:06:18Z'
      },
      {
        name: 'react-native',
        html_url: 'https://github.com/facebook/react-native',
        description: 'A framework for building native applications using React',
        updated_at: '2021-09-09T06:57:25Z'
      },
      {
        name: 'fboss',
        html_url: 'https://github.com/facebook/fboss',
        description: 'Facebook Open Switching System\n' +
          '\n' +
          'Software for controlling network switches.',
        updated_at: '2021-09-09T06:57:16Z'
      },
      {
        name: 'fb303',
        html_url: 'https://github.com/facebook/fb303',
        description: 'fb303 is a core set of thrift functions that provide a common mechanism for querying stats and other information from a service.',
        updated_at: '2021-09-09T06:50:45Z'
      },
      {
        name: 'watchman',
        html_url: 'https://github.com/facebook/watchman',
        description: 'Watches files and records, or triggers actions, when they change. ',
        updated_at: '2021-09-09T06:50:28Z'
      },
      {
        name: 'fbzmq',
        html_url: 'https://github.com/facebook/fbzmq',
        description: 'Facebook ZeroMQ wrappers.',
        updated_at: '2021-09-09T06:50:09Z'
      },
      {
        name: 'bistro',
        html_url: 'https://github.com/facebook/bistro',
        description: 'Bistro is a flexible distributed scheduler, a high-performance framework supporting multiple paradigms while retaining ease of configuration, management, and monitoring.',
        updated_at: '2021-09-09T06:50:08Z'
      },
      {
        name: 'openr',
        html_url: 'https://github.com/facebook/openr',
        description: 'Distributed platform for building autonomic network functions.',
        updated_at: '2021-09-09T06:50:08Z'
      },
      {
        name: 'draft-js',
        html_url: 'https://github.com/facebook/draft-js',
        description: 'A React framework for building text editors.',
        updated_at: '2021-09-09T06:44:07Z'
      },
      {
        name: 'flux',
        html_url: 'https://github.com/facebook/flux',
        description: 'Application Architecture for Building User Interfaces',
        updated_at: '2021-09-09T06:43:22Z'
      },
      {
        name: 'mcrouter',
        html_url: 'https://github.com/facebook/mcrouter',
        description: 'Mcrouter is a memcached protocol router for scaling memcached deployments.',
        updated_at: '2021-09-09T06:32:09Z'
      },
      {
        name: 'buck',
        html_url: 'https://github.com/facebook/buck',
        description: 'A fast build system that encourages the creation of small, reusable modules over a variety of platforms and languages.',
        updated_at: '2021-09-09T06:29:12Z'
      },
      {
        name: 'flow',
        html_url: 'https://github.com/facebook/flow',
        description: 'Adds static typing to JavaScript to improve developer productivity and code quality.',
        updated_at: '2021-09-09T06:27:09Z'
      },
      {
        name: 'fbthrift',
        html_url: 'https://github.com/facebook/fbthrift',
        description: "Facebook's branch of Apache Thrift, including a new C++ server.",
        updated_at: '2021-09-09T06:25:01Z'
      },
      {
        name: 'pyre-check',
        html_url: 'https://github.com/facebook/pyre-check',
        description: 'Performant type-checking for python.',
        updated_at: '2021-09-09T06:22:48Z'
      },
      {
        name: 'jest',
        html_url: 'https://github.com/facebook/jest',
        description: 'Delightful JavaScript Testing.',
        updated_at: '2021-09-09T06:14:50Z'
      },
      {
        name: 'openbmc',
        html_url: 'https://github.com/facebook/openbmc',
        description: 'OpenBMC is an open software framework to build a complete Linux image for a Board Management Controller (BMC).',
        updated_at: '2021-09-09T06:07:25Z'
      },
      {
        name: 'hhvm',
        html_url: 'https://github.com/facebook/hhvm',
        description: 'A virtual machine for executing programs written in Hack.',
        updated_at: '2021-09-09T05:55:29Z'
      },
      {
        name: 'folly',
        html_url: 'https://github.com/facebook/folly',
        description: 'An open-source C++ library developed and used at Facebook.',
        updated_at: '2021-09-09T05:52:14Z'
      },
      {
        name: 'proxygen',
        html_url: 'https://github.com/facebook/proxygen',
        description: 'A collection of C++ HTTP libraries including an easy to use HTTP server.',
        updated_at: '2021-09-09T05:38:46Z'
      },
      {
        name: 'fresco',
        html_url: 'https://github.com/facebook/fresco',
        description: 'An Android library for managing images and the memory they use.',
        updated_at: '2021-09-09T05:25:31Z'
      },
      {
        name: 'wangle',
        html_url: 'https://github.com/facebook/wangle',
        description: 'Wangle is a framework providing a set of common client/server abstractions for building services in a consistent, modular, and composable way.',
        updated_at: '2021-09-09T05:14:07Z'
      },
      {
        name: 'prop-types',
        html_url: 'https://github.com/facebook/prop-types',
        description: 'Runtime type checking for React props and similar objects',
        updated_at: '2021-09-09T04:44:05Z'
      },
      {
        name: 'Ax',
        html_url: 'https://github.com/facebook/Ax',
        description: 'Adaptive Experimentation Platform',
        updated_at: '2021-09-09T04:44:02Z'
      }
    ]
  }
};


router.get("/", (req, res) => {
  const arr = [];
  Object.entries(developers).forEach(([key, val]) => {
    arr.push({
      id: val.login,
      avatar_url: val.avatar_url,
    });
  });
  res.send(arr);
});

//Individual user
router.get("/:userId", (req, res) => {
  const data = developers[req.params.userId];
  const individualDev = {
    id: data.login,
    avatar_url: data.avatar_url,
    name: data.name,
    company: data.company,
    blog: data.blog,
    location: data.location,
    email: data.email,
    bio: data.bio,
    github_id: data.github_id,
    linkedin_id: data.linkedin_id,
    codechef_id: data.codechef_id,
    hackerrank_id: data.hackerrank_id,
    twitter_id: data.twitter_id,
    medium_id: data.medium_id,
    repos: data.repos,
  };
   
  res.send(individualDev);
});

router.post("/", (req, res) => {
  const githubid = req.body.github_id;
  const linkedin_id = req.body.linkedin_id;
  const codechef_id = req.body.codechef_id;
  const hackerrank_id = req.body.hackerrank_id;
  const twitter_id = req.body.twitter_id;
  const medium_id = req.body.medium_id;
  const userInfoPromise = axios(`https://api.github.com/users/${githubid}`).then(res=>{return res;})
  .catch((err)=>{
    res.status(404);
    res.send("user not found");
  })
  const reposPromise = axios(`https://api.github.com/users/${githubid}/repos`);
  Promise.all([userInfoPromise, reposPromise]).then((responses) => {
    const [userInfo, repos] = responses;
    developers[githubid] = {
      ...userInfo.data,
      githubid: githubid,
      linkedin_id: linkedin_id,
      codechef_id: codechef_id,
      hackerrank_id: hackerrank_id,
      twitter_id: twitter_id,
      medium_id: medium_id,
      repos: repos.data,
    };
    res.send(userInfo.data);
  });
});

module.exports = router;
