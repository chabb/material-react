export const DEFAULT_OPTIONS = {
  interaction: { hover: true, tooltipDelay: 0, zoomView: false, dragView: false },
  edges: { smooth: { type: 'dynamic' }, length: 250, color: { inherit: 'both' } },
  physics: {
    solver: 'forceAtlas2Based',
    forceAtlas2Based: { avoidOverlap: 1 },
    stabilization: { fit: true }
  }
};
export const GRAPH = {
  nodes: [
    { id: 0, title: 'Sn site (4 neighbors)', color: '#9a8eb9' },
    { id: 1, title: 'Sn site (4 neighbors)', color: '#9a8eb9' },
    { id: 2, title: 'Sn site (4 neighbors)', color: '#9a8eb9' },
    { id: 3, title: 'Ce site (12 neighbors)', color: '#ffffc7' }
  ],
  edges: [
    {
      from: 0,
      to: 3,
      arrows: '',
      length: 166.88637683827804,
      title: '3.34 Å between sites',
      id: '82870605-7f0c-4177-a438-63be2da70eda'
    },
    {
      from: 0,
      to: 3,
      arrows: 'to',
      length: 166.88637683827804,
      title: '3.34 Å to site at image vector (1, 0, 0)',
      id: '026e7ed0-3a85-4138-9b9e-f6156d99ee58'
    },
    {
      from: 0,
      to: 3,
      arrows: 'to',
      length: 166.88637683827804,
      title: '3.34 Å to site at image vector (1, 0, 1)',
      id: 'bf2562f5-9501-4d2a-9e5c-fefecfcaddf2'
    },
    {
      from: 0,
      to: 3,
      arrows: 'to',
      length: 166.88637683827804,
      title: '3.34 Å to site at image vector (0, 0, 1)',
      id: '0b290f2b-30cd-4fe2-b168-c61fba1a9515'
    },
    {
      from: 1,
      to: 3,
      arrows: 'to',
      length: 166.88637683827804,
      title: '3.34 Å to site at image vector (0, 1, 0)',
      id: '7b877631-1bbc-4558-a4a3-872b4dcb8661'
    },
    {
      from: 1,
      to: 3,
      arrows: 'to',
      length: 166.88637683827804,
      title: '3.34 Å to site at image vector (0, 1, 1)',
      id: '63ec8d00-bdfe-4058-93eb-3f7e87d1cfbb'
    },
    {
      from: 1,
      to: 3,
      arrows: '',
      length: 166.88637683827804,
      title: '3.34 Å between sites',
      id: '2b6a4f9c-e4e1-43fb-941a-941ca3d0a034'
    },
    {
      from: 1,
      to: 3,
      arrows: 'to',
      length: 166.88637683827804,
      title: '3.34 Å to site at image vector (0, 0, 1)',
      id: 'f735e7cf-b270-481f-ba4b-8f9603abbd8e'
    },
    {
      from: 2,
      to: 3,
      arrows: 'to',
      length: 166.88637683827804,
      title: '3.34 Å to site at image vector (0, 1, 0)',
      id: '5357da7c-4a88-4219-b5c4-b93eb712e8ed'
    },
    {
      from: 2,
      to: 3,
      arrows: 'to',
      length: 166.88637683827804,
      title: '3.34 Å to site at image vector (1, 1, 0)',
      id: 'e337a394-5d9e-41fc-8c9c-55d4e9609b22'
    },
    {
      from: 2,
      to: 3,
      arrows: '',
      length: 166.88637683827804,
      title: '3.34 Å between sites',
      id: '0838bc23-156f-4003-b7bf-f6d6f05c6b4d'
    },
    {
      from: 2,
      to: 3,
      arrows: 'to',
      length: 166.88637683827804,
      title: '3.34 Å to site at image vector (1, 0, 0)',
      id: 'bcbda2de-b5c2-4316-a425-56cec5ca2f65'
    }
  ]
};
