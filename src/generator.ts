#!/usr/bin/env node
import realFs from "fs";
import gracefulFs from "graceful-fs";
gracefulFs.gracefulify(realFs)

import "./cli/generator";
