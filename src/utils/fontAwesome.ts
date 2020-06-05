import Vue from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

// Icons
import { faFrown } from '@fortawesome/free-regular-svg-icons';
import { faBook, faSearch, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faGithub, faNpm, faPatreon } from '@fortawesome/free-brands-svg-icons';

library.add(faDiscord, faGithub, faBook, faFrown, faNpm, faPatreon, faSearch, faSun, faMoon);

Vue.component('font-awesome-icon', FontAwesomeIcon);
