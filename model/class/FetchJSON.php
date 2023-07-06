<?php

class FetchJSON
{
    public static function fetchLocalJSON($path): array
    {
        $json = file_get_contents($path);
        $json = json_decode($json, true);
        return $json;
    }
}
