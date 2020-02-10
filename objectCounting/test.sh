port_num='127.0.0.1:41510'
root_url='https://crowd.cs.purdue.edu/lzr'
export ROOT_URL=$root_url
export BIND_UP=$port
meteor run --port $port_num
echo "finished"
