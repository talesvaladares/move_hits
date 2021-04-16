module.exports = {
  "presets" : ["next/babel"],
  "plugins" : [
    ["styled-components", {"ssr" : true}],
    ["superjson-next"] //plugin para usar json no server -> getStaticProps -> getServerSideProps
  ],
  
};