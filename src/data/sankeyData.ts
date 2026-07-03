export interface SankeyNode {
  id: string;
  label: string;
}

export interface SankeyFlow {
  sourceId: string;
  targetId: string;
}

// Left — specific skills
export const specificSkills: SankeyNode[] = [
  { id: 'site-assessment', label: 'Site Assessment' },
  { id: 'spatial-analysis', label: 'Spatial Analysis' },
  { id: 'esri', label: 'Esri' },
  { id: 'mapbox', label: 'Mapbox' },
  { id: 'cartography', label: 'Cartography' },
  { id: 'research', label: 'Research' },
  { id: 'presales', label: 'Presales' },
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'demo', label: 'Demo' },
  { id: 'ux-ui', label: 'UX/UI' },
  { id: 'product-design', label: 'Product Design' },
  { id: 'git', label: 'Git' },
  { id: 'genai', label: 'GenAI' },
  { id: 'testing', label: 'Testing' },
  { id: 'ci-cd', label: 'CI/CD' },
  { id: 'n8n', label: 'n8n Automations' },
];

// Middle — broad skills
export const broadSkills: SankeyNode[] = [
  { id: 'data-analyst', label: 'Data Analyst' },
  { id: 'comm-design', label: 'Communication & Design' },
  { id: 'engineering', label: 'Engineering' },
];

// Right — industries
export const industries: SankeyNode[] = [
  { id: 'urban-mobility', label: 'Urban Planning & Mobility' },
  { id: 'geospatial', label: 'Geospatial' },
  { id: 'product-tech', label: 'Product & Tech' },
];

// Left → Middle
export const leftFlows: SankeyFlow[] = [
  { sourceId: 'site-assessment', targetId: 'data-analyst' },
  { sourceId: 'spatial-analysis', targetId: 'data-analyst' },
  { sourceId: 'esri', targetId: 'data-analyst' },
  { sourceId: 'mapbox', targetId: 'data-analyst' },
  { sourceId: 'cartography', targetId: 'comm-design' },
  { sourceId: 'research', targetId: 'comm-design' },
  { sourceId: 'presales', targetId: 'comm-design' },
  { sourceId: 'roadmap', targetId: 'comm-design' },
  { sourceId: 'demo', targetId: 'comm-design' },
  { sourceId: 'ux-ui', targetId: 'comm-design' },
  { sourceId: 'product-design', targetId: 'comm-design' },
  { sourceId: 'git', targetId: 'engineering' },
  { sourceId: 'genai', targetId: 'engineering' },
  { sourceId: 'testing', targetId: 'engineering' },
  { sourceId: 'ci-cd', targetId: 'engineering' },
  { sourceId: 'n8n', targetId: 'engineering' },
];

// Middle → Right
export const rightFlows: SankeyFlow[] = [
  { sourceId: 'data-analyst', targetId: 'urban-mobility' },
  { sourceId: 'data-analyst', targetId: 'geospatial' },
  { sourceId: 'comm-design', targetId: 'urban-mobility' },
  { sourceId: 'comm-design', targetId: 'product-tech' },
  { sourceId: 'engineering', targetId: 'geospatial' },
  { sourceId: 'engineering', targetId: 'product-tech' },
];

// Legacy exports so existing imports don't break during transition
export const sourceNodes = specificSkills;
export const targetNodes = broadSkills;
export const flows = leftFlows;
