/* * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/*
    15.05.20 TS: initial commit
*/

//Helper function
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

//Available domain_prefix
const available_domain_prefixs = {'ffwsn':"Freifunk Weinstraße Nord",
                                  'ffwss':"Freifunk Weinstraße Süd",
                                  'ffaw':"Freifunk Alzey-Worms", 
                                  'ffso':"Freifunk Soonwald", 
                                  'ffwy':"Freifunk Weyher", 
                                  'ffvp':"Freifunk Vorderpfalz",
                                   };

//Build domain_setting
var community = getQueryVariable('community');
if (available_domain_prefixs[community] != null){
  var domain_prefix = community;
  var verbose_name  = available_domain_prefixs[community];
} else {
  var domain_prefix = 'ffwsn';
  var verbose_name = "Freifunk Weinstraße Nord";
}

//ffsw global settings
var firmware_base_path = `/fw/${domain_prefix}`;
const fw_stages = {'stable':'stable','pilot':'stable.pilot'};
const fw_types = ['factory','other','sysupgrade'];

var config = {
  // list images on console that match no model
  listMissingImages: false,
  // see devices.js for different vendor model maps
  vendormodels: vendormodels,
  // set enabled categories of devices (see devices.js)
  enabled_device_categories: ["recommended", "ath10k_lowmem", "small_kernel_part", "4_32",  "8_32"],
  // Display a checkbox that allows to display not recommended devices.
  // This only make sense if enabled_device_categories also contains not
  // recommended devices.
  recommended_toggle: true,
  // Optional link to an info page about no longer recommended devices
  recommended_info_link: null,
  // community prefix of the firmware images
  community_prefix: `gluon-${domain_prefix}-${domain_prefix}-v`,
  // firmware version regex
  version_regex: '-([0-9]{3})?[.-]',
  //version_regex: '-(v[0-9]{3})?[.-]',
  // relative image paths and branch
  directories: {
    // some demo sources
    // GENERATED
  },
  // page title
  title:`${verbose_name} Firmware`,
  // branch descriptions shown during selection
  branch_descriptions: {
    stable: 'Gut getestet, zuverlässig und stabil.',
    //beta: 'Vorabtests neuer Stable-Kandidaten.',
    pilot: 'Noch im Test.'
  },
  // recommended branch will be marked during selection
  recommended_branch: 'stable',
  // experimental branches (show a warning for these branches)
  experimental_branches: ['pilot'],
  // path to preview pictures directory
  preview_pictures: 'pictures/',
  // link to changelog
  changelog: 'https://freifunk-suedwest.de/firmware-versionen/'
};

//Generate firmware directories
for (const[stage, folder] of Object.entries(fw_stages)){ // stages: {stable:stable pilot:stable_pilot} ...
  for (let i=0; i<fw_types.length; i++) { // type: [factory, sysuograde, other] ...
    config.directories[firmware_base_path +'/'+ folder +'/'+ fw_types[i]+ "/"] = stage;
  }
}

