#!/usr/bin/env node

import startGame from '../src/index.js';
import { ruleMessage, brainEven } from '../src/games/even-game.js';

startGame(ruleMessage, brainEven);
