import designing from './static/publications/2021-designing.json';
import robomath from './static/publications/2021-robomath.json';
import coframe from './static/publications/2022-hri-coframe.json';
import understanding from './static/publications/2022-understanding.json';
import expressions from './static/publications/2023-designing-expressions.json';
import parentchild from './static/publications/2023-idc-parent-child.json';
import makingdecisions from './static/publications/2024-hri-making-decisions.json';
import enduserinterfaces from './static/publications/2024-hri-end-user-interfaces.json';

// Ongoing Projects
import gpujson from './static/ongoingprojects/gpu.json';
import planningjson from './static/ongoingprojects/planning.json';
import worldbeliefjson from './static/ongoingprojects/worldbelief.json';

// Past projects
import remotecollabjson from './static/pastprojects/remotecollaboration.json';
import coframejson from './static/pastprojects/coframe.json';
import sciencejson from './static/pastprojects/sciencelearning.json';
import mathjson from './static/pastprojects/mathlearning.json';

// Teaser images
import pepper from "./static/images/pepper_flower.png";
import misty from "./static/images/misty_table.png";
import coframeImage from "./static/images/coframe.jpg";
import roboBlocks from "./static/images/robo-blocks.png";
import allocation from "./static/images/allocation.png";
import readingRobot from "./static/images/reading-robot.jpg";

export const publicationJsons = [enduserinterfaces, makingdecisions, parentchild, expressions, understanding, coframe, robomath, designing];
export const ongoingProjects = [planningjson, gpujson, worldbeliefjson];
export const pastProjects = [coframejson, sciencejson, remotecollabjson, mathjson];
export const allProjects = [{teaser: allocation, ...planningjson}, {teaser: roboBlocks, ...gpujson}, {teaser: pepper, ...worldbeliefjson}, {teaser: coframeImage, ...coframejson}, {teaser: readingRobot, ...sciencejson}, {teaser: misty, ...mathjson}]