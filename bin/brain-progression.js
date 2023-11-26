#!/usr/bin/env node

import startGame from '../src/index.js';
import { ruleMessage, brainProgression } from '../src/games/progression-game.js';

startGame(ruleMessage, brainProgression);
