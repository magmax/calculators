var cvs31Tree = {
  B: {
    l: "Base Score",
    d: "The Base group represents the intrinsic qualities of a vulnerability that are constant over time and across user environments, the Temporal group reflects the characteristics of a vulnerability that change over time, and the Environmental group represents the characteristics of a vulnerability that are unique to a user's environment.",
    c: {
      E: {
        l: "Exploitability",
        d: "The Exploitability metrics reflect the ease and technical means by which the vulnerability can be exploited.",
        c: {
          AV: {
            l: "Attack Vector",
            d: "This metric reflects the context by which vulnerability exploitation is possible.",
            o: {
              N: {
                l: "Network",
                d: "The vulnerable component is bound to the network stack and the set of possible attackers extends beyond the other options listed below, up to and including the entire Internet. Such a vulnerability is often termed “remotely exploitable” and can be thought of as an attack being exploitable at the protocol level one or more network hops away (e.g., across one or more routers)."
              },
              A: {
                l: "Adjacent",
                d: "The vulnerable component is bound to the network stack, but the attack is limited at the protocol level to a logically adjacent topology. This can mean an attack must be launched from the same shared physical (e.g., Bluetooth or IEEE 802.11) or logical (e.g., local IP subnet) network, or from within a secure or otherwise limited administrative domain (e.g., MPLS, secure VPN to an administrative network zone)."
              },
              L: {
                l: "Local",
                d: "The vulnerable component is not bound to the network stack and the attacker’s path is via read/write/execute capabilities. Either: the attacker exploits the vulnerability by accessing the target system locally (e.g., keyboard, console), or remotely (e.g., SSH); or the attacker relies on User Interaction by another person to perform actions required to exploit the vulnerability (e.g., using social engineering techniques to trick a legitimate user into opening a malicious document)."
              },
              P: {
                l: "Physical",
                d: "The attack requires the attacker to physically touch or manipulate the vulnerable component. Physical interaction may be brief (e.g., evil maid attack1) or persistent."
              }
            }
          },
          AC: {
            l: "Attack Complexity",
            d: "This metric describes the conditions beyond the attacker’s control that must exist in order to exploit the vulnerability.",
            o: {
              L: {
                l: "Low",
                d: "Specialized access conditions or extenuating circumstances do not exist. An attacker can expect repeatable success when attacking the vulnerable component."
              },
              H: {
                l: "High",
                d: "A successful attack depends on conditions beyond the attacker's control. That is, a successful attack cannot be accomplished at will, but requires the attacker to invest in some measurable amount of effort in preparation or execution against the vulnerable component before a successful attack can be expected."
              },
            },
          },
          PR: {
            l: "Privileges Required",
            d: "This metric describes the level of privileges an attacker must possess before successfully exploiting the vulnerability.",
            o: {
              N: {
                l: "None",
                d: "The attacker is unauthorized prior to attack, and therefore does not require any access to settings or files of the vulnerable system to carry out an attack."
              },
              L: {
                l: "Low",
                d: "The attacker requires privileges that provide basic user capabilities that could normally affect only settings and files owned by a user. Alternatively, an attacker with Low privileges has the ability to access only non-sensitive resources."
              },
              H: {
                l: "High",
                d: "The attacker requires privileges that provide significant (e.g., administrative) control over the vulnerable component allowing access to component-wide settings and files."
              },
            },
          },
          UI: {
            l: "User Interaction",
            d: "This metric captures the requirement for a human user, other than the attacker, to participate in the successful compromise of the vulnerable component.",
            o: {
              N: {
                l: "None",
                d: "The vulnerable system can be exploited without interaction from any user."
              },
              R: {
                l: "Required",
                d: "Successful exploitation of this vulnerability requires a user to take some action before the vulnerability can be exploited."
              },
            },
          },
        },
      },
      S: {
        l: "Scope",
        d: "The Scope metric captures whether a vulnerability in one vulnerable component impacts resources in components beyond its security scope.",
        c: {
          S: {
            l: "Scope",
            d: "The Scope metric captures whether a vulnerability in one vulnerable component impacts resources in components beyond its security scope.",
            o: {
              C: {
                l: "Changed",
                d: "An exploited vulnerability can affect resources beyond the security scope managed by the security authority of the vulnerable component. In this case, the vulnerable component and the impacted component are different and managed by different security authorities."
              },
              U: {
                l: "Unchanged",
                d: "An exploited vulnerability can only affect resources managed by the same security authority. In this case, the vulnerable component and the impacted component are either the same, or both are managed by the same security authority."
              }
            },
          }
        }
      },
      I: {
        l: "Impact",
        d: "The Impact metrics reflect the direct consequence of a successful exploit",
        c: {
          C: {
            l: "Confidentiality",
            d: "This metric measures the impact to the confidentiality of the information resources managed by a software component due to a successfully exploited vulnerability.",
            o: {
              H: {
                l: "High",
                d: "There is a total loss of confidentiality, resulting in all resources within the impacted component being divulged to the attacker. Alternatively, access to only some restricted information is obtained, but the disclosed information presents a direct, serious impact."
              },
              L: {
                l: "Low",
                d: "There is some loss of confidentiality. Access to some restricted information is obtained, but the attacker does not have control over what information is obtained, or the amount or kind of loss is limited. The information disclosure does not cause a direct, serious loss to the impacted component."
              },
              N: {
                l: "None",
                d: "There is no loss of confidentiality within the impacted component."
              }
            },
          },
          I: {
            l: "Integrity",
            d: "This metric measures the impact to integrity of a successfully exploited vulnerability. Integrity refers to the trustworthiness and veracity of information.",
            o: {
              H: {
                l: "High",
                d: "There is a total loss of integrity, or a complete loss of protection."
              },
              L: {
                l: "Low",
                d: "Modification of data is possible, but the attacker does not have control over the consequence of a modification, or the amount of modification is limited. The data modification does not have a direct, serious impact on the impacted component."
              },
              N: {
                l: "None",
                d: "There is no loss of integrity within the impacted component."
              }
            },
          },
          A: {
            l: "Availability",
            d: "This metric measures the impact to the availability of the impacted component resulting from a successfully exploited vulnerability.",
            o: {
              H: {
                l: "High",
                d: "There is a total loss of availability, resulting in the attacker being able to fully deny access to resources in the impacted component; this loss is either sustained (while the attacker continues to deliver the attack) or persistent (the condition persists even after the attack has completed). Alternatively, the attacker has the ability to deny some availability, but the loss of availability presents a direct, serious consequence to the impacted component (e.g., the attacker cannot disrupt existing connections, but can prevent new connections; the attacker can repeatedly exploit a vulnerability that, in each instance of a successful attack, leaks a only small amount of memory, but after repeated exploitation causes a service to become completely unavailable)."
              },
              L: {
                l: "Low",
                d: "Performance is reduced or there are interruptions in resource availability. Even if repeated exploitation of the vulnerability is possible, the attacker does not have the ability to completely deny service to legitimate users. The resources in the impacted component are either partially available all of the time, or fully available only some of the time, but overall there is no direct, serious consequence to the impacted component."
              },
              N: {
                l: "None",
                d: "There is no impact to availability within the impacted component."
              }
            },
          },
        },
      },
    },
  },
};

var Weight = {
  AV: {
    N: 0.85,
    A: 0.62,
    L: 0.55,
    P: 0.2
  },
  AC: {
    H: 0.44,
    L: 0.77
  },
  PR: {
    U: {
      N: 0.85,
      L: 0.62,
      H: 0.27
    },
    C: {
      N: 0.85,
      L: 0.68,
      H: 0.5
    }
  },
  UI: {
    N: 0.85,
    R: 0.62
  },
  CIA: {
    N: 0,
    L: 0.22,
    H: 0.56,
  },
};

var calculate = (hash) => {
  mandatory = ["AV", "AC", "PR", "UI", "S", "C", "I", "A"];
  for (var i in mandatory) {
    if (hash[mandatory[i]] == undefined) {
      return "";
    }
  }

  var minimum = Math.min;
  var roundup = (n) => {
    return Math.ceil(n * 10) / 10;
  };

  var iss = (
    1 - (
      (1 - Weight["CIA"][hash["C"]]) *
      (1 - Weight["CIA"][hash["I"]]) *
      (1 - Weight["CIA"][hash["A"]])
    )
  );
  var impact = hash["S"] == "U" ? 6.42 * iss : 7.52 * (iss - 0.029) - 3.25 * (iss - 0.02) ** 15;

  var attackVector = Weight["AV"][hash["AV"]];
  var attackComplexity = Weight["AC"][hash["AC"]];
  var privilegeRequired = Weight["PR"][hash["S"]][hash["PR"]];
  var userInteraction = Weight["UI"][hash["UI"]];

  var exploitability = 8.22 * attackVector * attackComplexity * privilegeRequired * userInteraction;

  var baseScore = () => {
    if (impact <= 0) {
      return 0;
    }

    var base = impact + exploitability;

    if (hash["S"] == "C") {
      base *= 1.08;
    }
    return roundup(minimum(base , 10));
  }

  return baseScore();
};
