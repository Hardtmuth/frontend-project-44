#!/usr/bin/env node

import startGame from '../src/index.js';
import { ruleMessage, brainPrime } from '../src/games/prime-game.js';

startGame(ruleMessage, brainPrime);
