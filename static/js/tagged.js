import { fetchEvents } from './model/onlineInteractions.js';
import { getTagged } from './model/storage.js';
import { renderEvents } from './view/event.js';

fetchEvents(getTagged()).then(renderEvents);
