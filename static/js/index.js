import { fetchRecentEvents } from './model/onlineInteractions.js';
import { renderEvents } from './view/event.js';

fetchRecentEvents().then(renderEvents);
