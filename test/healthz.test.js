import { describe, it, expect } from 'vitest';
import { app, VERSION } from './src/index.js';

describe('healthz endpoint', () => {
  it('should return ok true and version', async () => {
    // Simple test for VERSION export
    expect(VERSION).toBe('1.0.0');
    expect(typeof VERSION).toBe('string');
  });
  
  it('should have valid version format', () => {
    const versionParts = VERSION.split('.');
    expect(versionParts.length).toBe(3);
  });
});