#!/usr/bin/env node

import startGame from '../src/index.js';
import { ruleMessage, brainGcd } from '../src/games/gcd-game.js';

startGame(ruleMessage, brainGcd);
