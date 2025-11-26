const HOSTNAMES = ['fritz.box', 'fritz.nas'];

const IP_RANGES = {
  '192.168.0.x': [
    '192.168.0.1',
    '192.168.0.2',
    '192.168.0.3',
    '192.168.0.4',
    '192.168.0.5',
    '192.168.0.6',
    '192.168.0.7',
    '192.168.0.8',
    '192.168.0.9',
    '192.168.0.10'
  ],
  '192.168.1.x': [
    '192.168.1.1',
    '192.168.1.2',
    '192.168.1.3',
    '192.168.1.4',
    '192.168.1.5',
    '192.168.1.6',
    '192.168.1.7',
    '192.168.1.8',
    '192.168.1.9',
    '192.168.1.10'
  ],
  '192.168.178.x': [
    '192.168.178.1',
    '192.168.178.2',
    '192.168.178.3',
    '192.168.178.4',
    '192.168.178.5',
    '192.168.178.6',
    '192.168.178.7',
    '192.168.178.8',
    '192.168.178.9',
    '192.168.178.10'
  ]
};

function displayHostnames() {
  const container = document.getElementById('hostnames-container');
  HOSTNAMES.forEach(hostname => {
    const item = document.createElement('div');
    item.className = 'hostname-item';
    item.textContent = hostname;
    container.appendChild(item);
  });
}

function displayColumns() {
  const columnsContainer = document.getElementById('columns-container');
  
  Object.entries(IP_RANGES).forEach(([range, ips]) => {
    const column = document.createElement('div');
    column.className = 'column';
    
    const header = document.createElement('div');
    header.className = 'column-header';
    header.textContent = range;
    column.appendChild(header);
    
    const list = document.createElement('div');
    list.className = 'ip-list';
    
    ips.forEach(ip => {
      const item = document.createElement('div');
      item.className = 'ip-item';
      item.textContent = ip;
      list.appendChild(item);
    });
    
    column.appendChild(list);
    columnsContainer.appendChild(column);
  });
}

displayHostnames();
displayColumns();
