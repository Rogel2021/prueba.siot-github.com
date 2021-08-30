var wms_layers = [];

var format_metropoli_centrosalud_BUFFER_5km_0 = new ol.format.GeoJSON();
var features_metropoli_centrosalud_BUFFER_5km_0 = format_metropoli_centrosalud_BUFFER_5km_0.readFeatures(json_metropoli_centrosalud_BUFFER_5km_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_metropoli_centrosalud_BUFFER_5km_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_metropoli_centrosalud_BUFFER_5km_0.addFeatures(features_metropoli_centrosalud_BUFFER_5km_0);
var lyr_metropoli_centrosalud_BUFFER_5km_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_metropoli_centrosalud_BUFFER_5km_0, 
                style: style_metropoli_centrosalud_BUFFER_5km_0,
                interactive: true,
                title: '<img src="styles/legend/metropoli_centrosalud_BUFFER_5km_0.png" /> metropoli_centrosalud_BUFFER_5km'
            });
var format_metropoli_centrosalud_lpz_WGS84_1 = new ol.format.GeoJSON();
var features_metropoli_centrosalud_lpz_WGS84_1 = format_metropoli_centrosalud_lpz_WGS84_1.readFeatures(json_metropoli_centrosalud_lpz_WGS84_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_metropoli_centrosalud_lpz_WGS84_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_metropoli_centrosalud_lpz_WGS84_1.addFeatures(features_metropoli_centrosalud_lpz_WGS84_1);
var lyr_metropoli_centrosalud_lpz_WGS84_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_metropoli_centrosalud_lpz_WGS84_1, 
                style: style_metropoli_centrosalud_lpz_WGS84_1,
                interactive: true,
                title: '<img src="styles/legend/metropoli_centrosalud_lpz_WGS84_1.png" /> metropoli_centrosalud_lpz_WGS84'
            });

lyr_metropoli_centrosalud_BUFFER_5km_0.setVisible(true);lyr_metropoli_centrosalud_lpz_WGS84_1.setVisible(true);
var layersList = [lyr_metropoli_centrosalud_BUFFER_5km_0,lyr_metropoli_centrosalud_lpz_WGS84_1];
lyr_metropoli_centrosalud_BUFFER_5km_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOM_DEP': 'NOM_DEP', 'NOM_PROV': 'NOM_PROV', 'CAT_SEC': 'CAT_SEC', 'NOM_MUN': 'NOM_MUN', 'L_nom_muni': 'L_nom_muni', 'pob': 'pob', 'Count_': 'Count_', 'Count_1': 'Count_1', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', });
lyr_metropoli_centrosalud_lpz_WGS84_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOM_DEP': 'NOM_DEP', 'NOM_PROV': 'NOM_PROV', 'CAT_SEC': 'CAT_SEC', 'NOM_MUN': 'NOM_MUN', 'L_nom_muni': 'L_nom_muni', 'pob': 'pob', 'Count_': 'Count_', 'Count_1': 'Count_1', });
lyr_metropoli_centrosalud_BUFFER_5km_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'NOM_DEP': 'TextEdit', 'NOM_PROV': 'TextEdit', 'CAT_SEC': 'TextEdit', 'NOM_MUN': 'TextEdit', 'L_nom_muni': 'TextEdit', 'pob': 'TextEdit', 'Count_': 'TextEdit', 'Count_1': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_metropoli_centrosalud_lpz_WGS84_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NOM_DEP': 'TextEdit', 'NOM_PROV': 'TextEdit', 'CAT_SEC': 'TextEdit', 'NOM_MUN': 'TextEdit', 'L_nom_muni': 'TextEdit', 'pob': 'TextEdit', 'Count_': 'TextEdit', 'Count_1': 'TextEdit', });
lyr_metropoli_centrosalud_BUFFER_5km_0.set('fieldLabels', {'OBJECTID': 'no label', 'NOM_DEP': 'no label', 'NOM_PROV': 'no label', 'CAT_SEC': 'no label', 'NOM_MUN': 'no label', 'L_nom_muni': 'no label', 'pob': 'no label', 'Count_': 'no label', 'Count_1': 'no label', 'BUFF_DIST': 'no label', 'ORIG_FID': 'no label', });
lyr_metropoli_centrosalud_lpz_WGS84_1.set('fieldLabels', {'OBJECTID': 'no label', 'NOM_DEP': 'no label', 'NOM_PROV': 'no label', 'CAT_SEC': 'no label', 'NOM_MUN': 'no label', 'L_nom_muni': 'no label', 'pob': 'no label', 'Count_': 'no label', 'Count_1': 'no label', });
lyr_metropoli_centrosalud_lpz_WGS84_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});