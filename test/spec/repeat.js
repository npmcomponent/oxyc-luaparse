(function (root, name, factory) {
  'use strict';

  var freeExports = typeof exports === 'object' && exports
    , freeModule = typeof module === 'object' && module && module.exports === freeExports && module
    , freeGlobal = typeof global === 'object' && global;
  if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) root = freeGlobal;

  if (typeof define === 'function' && define.amd) define(['exports'], factory);
  else if (freeExports && !freeExports.nodeType) {
    if (freeModule) factory(freeModule.exports);
    else factory(freeExports);
  }
  else factory((root[name] = {}));
}(this, 'repeat', function (exports) {
  'use strict';

  exports.name = 'repeat';
  exports.spec = {
    "repeat": "[1:6] 'until' expected near '<eof>'",
    "repeat until": "[1:12] <expression> expected near '<eof>'",
    "repeat until 0": {
      "type": "Chunk",
      "body": [
        {
          "type": "RepeatStatement",
          "condition": {
            "type": "NumericLiteral",
            "value": 0,
            "raw": "0",
            "loc": {
              "start": {
                "line": 1,
                "column": 13
              },
              "end": {
                "line": 1,
                "column": 14
              }
            },
            "range": [
              13,
              14
            ]
          },
          "body": [],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 14
            }
          },
          "range": [
            0,
            14
          ]
        }
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 14
        }
      },
      "range": [
        0,
        14
      ],
      "comments": [],
      "globals": []
    },
    "repeat until false": {
      "type": "Chunk",
      "body": [
        {
          "type": "RepeatStatement",
          "condition": {
            "type": "BooleanLiteral",
            "value": false,
            "raw": "false",
            "loc": {
              "start": {
                "line": 1,
                "column": 13
              },
              "end": {
                "line": 1,
                "column": 18
              }
            },
            "range": [
              13,
              18
            ]
          },
          "body": [],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 18
            }
          },
          "range": [
            0,
            18
          ]
        }
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 18
        }
      },
      "range": [
        0,
        18
      ],
      "comments": [],
      "globals": []
    },
    "repeat until local": "[1:13] <expression> expected near 'local'",
    "repeat end": "[1:7] 'until' expected near 'end'",
    "repeat 1": "[1:7] Unexpected number '1' near '<eof>'",
    "repeat =": "[1:7] Unexpected symbol '=' near '<eof>'",
    "repeat local a until 1": {
      "type": "Chunk",
      "body": [
        {
          "type": "RepeatStatement",
          "condition": {
            "type": "NumericLiteral",
            "value": 1,
            "raw": "1",
            "loc": {
              "start": {
                "line": 1,
                "column": 21
              },
              "end": {
                "line": 1,
                "column": 22
              }
            },
            "range": [
              21,
              22
            ]
          },
          "body": [
            {
              "type": "LocalStatement",
              "variables": [
                {
                  "type": "Identifier",
                  "name": "a",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 13
                    },
                    "end": {
                      "line": 1,
                      "column": 14
                    }
                  },
                  "range": [
                    13,
                    14
                  ],
                  "isLocal": true
                }
              ],
              "init": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 7
                },
                "end": {
                  "line": 1,
                  "column": 14
                }
              },
              "range": [
                7,
                14
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 22
            }
          },
          "range": [
            0,
            22
          ]
        }
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 22
        }
      },
      "range": [
        0,
        22
      ],
      "comments": [],
      "globals": []
    },
    "repeat local a local b until 0": {
      "type": "Chunk",
      "body": [
        {
          "type": "RepeatStatement",
          "condition": {
            "type": "NumericLiteral",
            "value": 0,
            "raw": "0",
            "loc": {
              "start": {
                "line": 1,
                "column": 29
              },
              "end": {
                "line": 1,
                "column": 30
              }
            },
            "range": [
              29,
              30
            ]
          },
          "body": [
            {
              "type": "LocalStatement",
              "variables": [
                {
                  "type": "Identifier",
                  "name": "a",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 13
                    },
                    "end": {
                      "line": 1,
                      "column": 14
                    }
                  },
                  "range": [
                    13,
                    14
                  ],
                  "isLocal": true
                }
              ],
              "init": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 7
                },
                "end": {
                  "line": 1,
                  "column": 14
                }
              },
              "range": [
                7,
                14
              ]
            },
            {
              "type": "LocalStatement",
              "variables": [
                {
                  "type": "Identifier",
                  "name": "b",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 21
                    },
                    "end": {
                      "line": 1,
                      "column": 22
                    }
                  },
                  "range": [
                    21,
                    22
                  ],
                  "isLocal": true
                }
              ],
              "init": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 15
                },
                "end": {
                  "line": 1,
                  "column": 22
                }
              },
              "range": [
                15,
                22
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 30
            }
          },
          "range": [
            0,
            30
          ]
        }
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 30
        }
      },
      "range": [
        0,
        30
      ],
      "comments": [],
      "globals": []
    },
    "repeat local a; local b; until 0": {
      "type": "Chunk",
      "body": [
        {
          "type": "RepeatStatement",
          "condition": {
            "type": "NumericLiteral",
            "value": 0,
            "raw": "0",
            "loc": {
              "start": {
                "line": 1,
                "column": 31
              },
              "end": {
                "line": 1,
                "column": 32
              }
            },
            "range": [
              31,
              32
            ]
          },
          "body": [
            {
              "type": "LocalStatement",
              "variables": [
                {
                  "type": "Identifier",
                  "name": "a",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 13
                    },
                    "end": {
                      "line": 1,
                      "column": 14
                    }
                  },
                  "range": [
                    13,
                    14
                  ],
                  "isLocal": true
                }
              ],
              "init": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 7
                },
                "end": {
                  "line": 1,
                  "column": 14
                }
              },
              "range": [
                7,
                14
              ]
            },
            {
              "type": "LocalStatement",
              "variables": [
                {
                  "type": "Identifier",
                  "name": "b",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 22
                    },
                    "end": {
                      "line": 1,
                      "column": 23
                    }
                  },
                  "range": [
                    22,
                    23
                  ],
                  "isLocal": true
                }
              ],
              "init": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 16
                },
                "end": {
                  "line": 1,
                  "column": 23
                }
              },
              "range": [
                16,
                23
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 32
            }
          },
          "range": [
            0,
            32
          ]
        }
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 32
        }
      },
      "range": [
        0,
        32
      ],
      "comments": [],
      "globals": []
    },
    "repeat 2 until 1": "[1:7] Unexpected number '2' near 'until'",
    "repeat \"foo\" until 1": "[1:7] Unexpected string 'foo' near 'until'",
    "repeat return until 0": {
      "type": "Chunk",
      "body": [
        {
          "type": "RepeatStatement",
          "condition": {
            "type": "NumericLiteral",
            "value": 0,
            "raw": "0",
            "loc": {
              "start": {
                "line": 1,
                "column": 20
              },
              "end": {
                "line": 1,
                "column": 21
              }
            },
            "range": [
              20,
              21
            ]
          },
          "body": [
            {
              "type": "ReturnStatement",
              "arguments": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 7
                },
                "end": {
                  "line": 1,
                  "column": 13
                }
              },
              "range": [
                7,
                13
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 21
            }
          },
          "range": [
            0,
            21
          ]
        }
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 21
        }
      },
      "range": [
        0,
        21
      ],
      "comments": [],
      "globals": []
    },
    "repeat return return until 0": "[1:14] 'until' expected near 'return'",
    "repeat break until 0": {
      "type": "Chunk",
      "body": [
        {
          "type": "RepeatStatement",
          "condition": {
            "type": "NumericLiteral",
            "value": 0,
            "raw": "0",
            "loc": {
              "start": {
                "line": 1,
                "column": 19
              },
              "end": {
                "line": 1,
                "column": 20
              }
            },
            "range": [
              19,
              20
            ]
          },
          "body": [
            {
              "type": "BreakStatement",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 7
                },
                "end": {
                  "line": 1,
                  "column": 12
                }
              },
              "range": [
                7,
                12
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 20
            }
          },
          "range": [
            0,
            20
          ]
        }
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 20
        }
      },
      "range": [
        0,
        20
      ],
      "comments": [],
      "globals": []
    },
    "repeat do end until 0": {
      "type": "Chunk",
      "body": [
        {
          "type": "RepeatStatement",
          "condition": {
            "type": "NumericLiteral",
            "value": 0,
            "raw": "0",
            "loc": {
              "start": {
                "line": 1,
                "column": 20
              },
              "end": {
                "line": 1,
                "column": 21
              }
            },
            "range": [
              20,
              21
            ]
          },
          "body": [
            {
              "type": "DoStatement",
              "body": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 7
                },
                "end": {
                  "line": 1,
                  "column": 13
                }
              },
              "range": [
                7,
                13
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 21
            }
          },
          "range": [
            0,
            21
          ]
        }
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 21
        }
      },
      "range": [
        0,
        21
      ],
      "comments": [],
      "globals": []
    },
    "repeat do return end until 0": {
      "type": "Chunk",
      "body": [
        {
          "type": "RepeatStatement",
          "condition": {
            "type": "NumericLiteral",
            "value": 0,
            "raw": "0",
            "loc": {
              "start": {
                "line": 1,
                "column": 27
              },
              "end": {
                "line": 1,
                "column": 28
              }
            },
            "range": [
              27,
              28
            ]
          },
          "body": [
            {
              "type": "DoStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "arguments": [],
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 10
                    },
                    "end": {
                      "line": 1,
                      "column": 16
                    }
                  },
                  "range": [
                    10,
                    16
                  ]
                }
              ],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 7
                },
                "end": {
                  "line": 1,
                  "column": 20
                }
              },
              "range": [
                7,
                20
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 28
            }
          },
          "range": [
            0,
            28
          ]
        }
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 28
        }
      },
      "range": [
        0,
        28
      ],
      "comments": [],
      "globals": []
    },
    "repeat do break end until 0": {
      "type": "Chunk",
      "body": [
        {
          "type": "RepeatStatement",
          "condition": {
            "type": "NumericLiteral",
            "value": 0,
            "raw": "0",
            "loc": {
              "start": {
                "line": 1,
                "column": 26
              },
              "end": {
                "line": 1,
                "column": 27
              }
            },
            "range": [
              26,
              27
            ]
          },
          "body": [
            {
              "type": "DoStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 10
                    },
                    "end": {
                      "line": 1,
                      "column": 15
                    }
                  },
                  "range": [
                    10,
                    15
                  ]
                }
              ],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 7
                },
                "end": {
                  "line": 1,
                  "column": 19
                }
              },
              "range": [
                7,
                19
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 27
            }
          },
          "range": [
            0,
            27
          ]
        }
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 27
        }
      },
      "range": [
        0,
        27
      ],
      "comments": [],
      "globals": []
    }
  };
}));
