#!/usr/bin/env node

import startGame from '../src/index.js';
import { ruleMessage, brainCalc } from '../src/games/calc-game.js';

startGame(ruleMessage, brainCalc);
