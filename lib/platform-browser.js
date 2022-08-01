/*
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const api = {};
module.exports = api;

/**
 * Setup browser document loaders.
 *
 * @param jsonld the jsonld api.
 */
api.setupDocumentLoaders = function(jsonld) {
};

/**
 * Setup browser globals.
 *
 * @param jsonld the jsonld api.
 */
api.setupGlobals = function(jsonld) {
  // setup browser global JsonLdProcessor
  if(typeof globalThis.JsonLdProcessor === 'undefined') {
    Object.defineProperty(globalThis, 'JsonLdProcessor', {
      writable: true,
      enumerable: false,
      configurable: true,
      value: jsonld.JsonLdProcessor
    });
  }
};
